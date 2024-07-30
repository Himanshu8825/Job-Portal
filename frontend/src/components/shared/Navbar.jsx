import { PopoverTrigger } from '@radix-ui/react-popover';
import { AiOutlineLogout } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Popover, PopoverContent } from '../ui/popover';

const Navbar = () => {
  const user = false;
  return (
    <div className=" bg-white px-16 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h1 className=" text-3xl font-bold  ">
              Hire<span className=" text-[#F83002]">Hub</span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className=" flex font-medium items-center gap-5">
            <li>Home </li>
            <li> Job </li>
            <li> Browse </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className=" bg-[#6A38C2] hover:bg-[#5b30a6] ">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-60">
                <div>
                  <div className="flex flex-col gap- items-center">
                    <div className="flex justify-center items-center">
                      <Avatar className=" cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                    </div>
                    <div className="">
                      <h4 className="font-medium text-lg text-center">
                        Suraj Verma
                      </h4>
                      <p className=" text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between px-2">
                    <div className="flex items-center mt-2">
                      <FiUser className="text-xl" />
                      <Button
                        variant="link"
                        className="h-6 w-14 font-medium text-md"
                      >
                        Profile
                      </Button>
                    </div>
                    <div className="flex items-center mt-2">
                      <AiOutlineLogout className="text-xl" />
                      <Button
                        variant="link"
                        className="h-6 w-14 font-medium text-md "
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
