import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, MoreHorizontal, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const status = [
  { label: 'Accepted', icon: <Check className="w-4 h-4 text-green-500" /> },
  { label: 'Rejected', icon: <X className="w-4 h-4 text-red-500" /> },
];

const ApplicantsTable = () => {
  const { applicants } = useSelector((state) => state.application);
  console.log('Applicants ', applicants);

  return (
    <div className="poppins-medium">
      <Table>
        <TableCaption>A list of recently applied users</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className=" text-cente ">Full Name</TableHead>
            <TableHead className=" text-center ">Email</TableHead>
            <TableHead className=" text-center ">Contact</TableHead>
            <TableHead className=" text-center ">Resume</TableHead>
            <TableHead className=" text-center ">Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants &&
            applicants.applications.map((item, index) => (
              <tr key={index}>
                <TableCell className=" text-cente text-[18px] ">
                  {item?.applicant?.fullName}
                </TableCell>
                <TableCell className=" text-center ">
                  {item?.applicant?.email}
                </TableCell>
                <TableCell className=" text-center ">+91 9876543210</TableCell>
                <TableCell className=" text-center hover:underline hover:text-blue-500 cursor-pointer">
                  {item.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>
                <TableCell className=" text-center ">
                  {item?.applicant.createdAt.split('T')[0]}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>

                    <PopoverContent className="w-32">
                      {status.map((item, index) => (
                        <div
                          key={index}
                          size="small"
                          className=" cursor-pointer flex items-center font-semibold gap-1 "
                        >
                          {item.icon}
                          <span className="">{item.label}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
