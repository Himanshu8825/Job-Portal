import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GetAllCompany from '@/hooks/GetAllCompany';
import { CompaniesTable } from '@/Index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
  GetAllCompany();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate('/admin/companies/create')}
            className="bg-green-500 hover:bg-green-600 "
          >
            New Company
          </Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  );
};

export default Companies;
