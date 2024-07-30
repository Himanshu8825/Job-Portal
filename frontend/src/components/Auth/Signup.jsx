import { Link } from 'react-router-dom';
import SignUP from '../../assets/SignUp.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const Signup = () => {
  return (
    <div className="w-full px-16 py-4">
      <form action="" className="border border-gray-400 rounded-md p-4 ">
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <img src={SignUP} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 justify-center">
            <h1 className=" font-bold text-2xl  text-center">Sign Up</h1>
            <div>
              <Label>Full Name</Label>
              <Input type="text" placeholder="Enter your full name" />
            </div>

            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="demo@example.com" className="" />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input type="text" placeholder="+91 123 567 3455" className="" />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password here.."
                className=""
              />
            </div>

            <div>
              <Label htmlFor="picture">Profile</Label>
              <Input
                id="picture"
                type="file"
                accept="image/*"
                className=" cursor-pointer"
              />
            </div>

            <div className="mx-auto pt-4">
              <RadioGroup className="flex items-center gap-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="student"
                    id="r1"
                    className=" text-[#6A38C2] border-[#6A38C2]"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="recruciter"
                    id="r2"
                    className=" text-[#6A38C2] border-[#6A38C2]"
                  />
                  <Label htmlFor="r2">Recruciter</Label>
                </div>
              </RadioGroup>
            </div>
            <Button className="mt-4 bg-[#6A38C2] hover:bg-[#4712a1]">
              Sign up
            </Button>
            <div className="flex justify-center items-center font-medium">
              <p>Already have an account?</p>
              <Link to="/login" className="text-[#6A38C2] ml-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
