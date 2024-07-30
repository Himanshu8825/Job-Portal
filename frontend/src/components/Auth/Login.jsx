import { Link } from 'react-router-dom';
import LogIn from '../../assets/Login.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const Login = () => {
  return (
    <div className="w-full px-16 py-4">
      <form action="" className="border border-gray-400 rounded-md p-4 ">
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <img src={LogIn} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 justify-center">
            <h1 className=" font-bold text-2xl  text-center">Log In</h1>

            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="demo@example.com" className="" />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password here.."
                className=""
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
            <Button className="mt-4 bg-[#6A38C2] hover:bg-[#4712a1] text-lg">
              Log in
            </Button>
            <div className="flex justify-center items-center font-medium">
              <p>Don't have an account?</p>
              <Link to="/signup" className="text-[#6A38C2] ml-2">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
