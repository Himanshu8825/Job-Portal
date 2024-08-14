import { Button } from "@/components/ui/button";
import { setSearchedQuery } from "@/Redux/Slices/jobSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query , setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = ()=>{
    dispatch(setSearchedQuery(query));
    navigate('/browse')
  }

  return (
    <div className="text-center px-16 py-8 poppins-medium">
      <span className=" px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
        No. 1 Hiring Platform
      </span>

      <h1 className="text-5xl font-bold py-4 leading-tight">
        Search Apply & <br /> Get Your{' '}
        <span className="text-[#6A38C2]">Dream Jobs!</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        voluptatibus facere iusto labore, aspernatur quae?
      </p>

      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-4 rounded-full items-center gap-4 mx-auto mt-4">
        <input
          type="text"
          placeholder="Find your dream job here....."
          className=" outline-none border-none w-full font-medium "
          onChange={(e)=>setQuery(e.target.value)}
        />
        <Button
          onClick={searchHandler}
         className = ' rounded-r-full bg-[#6A38c2] hover:bg-[#441597]' >
            <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
