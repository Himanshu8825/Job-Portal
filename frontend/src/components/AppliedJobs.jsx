
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const AppliedJobs = () => {
  return (
    <div className='poppins-medium'>
      <Table>
        <TableCaption>A list of your applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Comapany</TableHead>
            <TableHead className=" text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow key={index}>
              <TableCell>05-08-2024</TableCell>
              <TableCell>Backend Developer</TableCell>
              <TableCell>Amazon</TableCell>
              <TableCell className=" text-right">

                <Badge className=" bg-green-400 hover:bg-green-600 cursor-pointer">Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
