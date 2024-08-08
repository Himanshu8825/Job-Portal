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
import { useSelector } from 'react-redux';

const CompaniesTable = () => {
  const { companies } = useSelector((state) => state.company);
  return (
    <div className="poppins-medium ">
      <Table>
        <TableCaption>A list of you recent registered Companies </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead className=" text-center ">Name</TableHead>
            <TableHead className=" text-center">Date</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies?.map((company) => (
            <tr key={company._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} className='h-8' />
                </Avatar>
              </TableCell>
              <TableCell className=" text-center ">{company.name}</TableCell>
              <TableCell className=" text-center">
                {company.createdAt.split('T')[0]}
              </TableCell>
              <TableCell className=" text-right">
                <Button
                  variant="secondary"
                  className=" bg-yellow-400 h-8 hover:bg-yellow-500"
                >
                  Edit
                </Button>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
