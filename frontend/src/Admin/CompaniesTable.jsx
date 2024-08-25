import { DELETE_COMPANY_API } from '@/assets/constant';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (state) => state.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  const deleteHAndler = async (companyID) => {
    try {
      const res = await axios.delete(`${DELETE_COMPANY_API}/${companyID}`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast.success(res.data.message);

        // Update the local state to remove the deleted company
        setFilterCompany((prevCompanies) =>
          prevCompanies.filter((company) => company._id !== companyID)
        );
      }
    } catch (error) {
      
      console.error(error.response.data);
      toast.error(error.response?.data?.error || 'An error occurred');
    }
  };


  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="poppins-medium ">
      <Table>
        <TableCaption>A list of your recent registered Companies </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead className=" text-center ">Name</TableHead>
            <TableHead className=" text-center">Date</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <TableRow key={company._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} className="" />
                </Avatar>
              </TableCell>
              <TableCell className=" text-center ">{company.name}</TableCell>
              <TableCell className=" text-center">
                {company.createdAt.split('T')[0]}
              </TableCell>
              <TableCell className=" text-right ">
                <div className="flex gap-4 justify-end">
                  <Button
                    onClick={() => navigate(`/admin/companies/${company._id}`)}
                    variant="secondary"
                    className=" bg-yellow-400 h-8 hover:bg-yellow-500"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteHAndler(company._id)}
                    variant="secondary"
                    className=" bg-red-600 h-8 hover:bg-red-700 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
