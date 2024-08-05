import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const FilterCard = () => {
  const filterData = [
    {
      filterType: 'Location',
      array: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'],
    },
    {
      filterType: 'Position',
      array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer'],
    },
    {
      filterType: 'Salary',
      array: ['0-40k', '42-1lakh', '1lakh to 5lakh'],
    },
  ];

  return (
    <div className="w-full bg-white p-3 rounded-md poppins-medium text-xl">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg text-red-600">
              {data.filterType}
            </h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;

              return (
                <div className="flex items-center space-x-2 my-2" key={itemId}>
                  <RadioGroupItem
                    className="text-[#6A38C2] border-[#6A38C2]"
                    value={item}
                    id={itemId}
                  />
                  <Label className="text-lg text-[#6A38C2]" htmlFor={itemId}>
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
