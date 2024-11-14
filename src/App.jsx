import "./App.css";
import lock from "./assets/lock.png";
import pic from "./assets/pic.png";
import main1 from "./assets/1Password1.svg";
import main2 from "./assets/1password-lock-ring.svg";
import main3 from "./assets/1password-keyhole.png";
import menu from "./menu.jsx";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import drop1 from "./assets/drop1.svg"
import drop2 from "./assets/drop2.svg"
import drop3 from "./assets/drop3.svg"



function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="h-screen ">
        <div className="flex h-full ">
          <div className="w-3/4 bg-gray-100 flex justify-center pl-[110px] h-full ">
            <div className="bg-white w-11 border-black/15 border-2 "></div>
            <div className="bg-white w-11 border-black/15 border-2 "></div>
            <img
              src={main2}
              alt=""
              className="absolute pt-[240px] pr-[769px]"
            />
            <img
              src={main1}
              alt=""
              className="absolute pt-[216px] w-[154px] mr-[769px]"
            />
            <img
              src={main3}
              alt=""
              className="absolute pt-[262px] w-[18px] mr-[769px]"
            />

            <div className="flex flex-col m-11 pt-[17vh] pr-12 justify-between ">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-xl pl-[120px] ">
                  Sign in to 1Password
                </h1>
                <h1 className="pl-[120px] flex">Email</h1>
                <div className="pl-[122px] flex flex-col ">
                  <input
                    type="email"
                    name=""
                    id=""
                    className=" relative w-full border-2 rounded-lg p-3 "
                  />
                  <div className="flex justify-between items-center">
                    <button className=" rounded-full mt-4 w-[120px] bg-gray-100 border-2 p-3 text-gray-300 font-semibold text-xl ">
                      Continue
                    </button>
                    <h1 className=" text-[#0166cb] cursor-pointer text-base font-semibold pt-4">
                      Having trouble signing in?
                    </h1>
                  </div>
                </div>

              </div>

              <div className="flex absolute mt-[240px] ml-[120px] border-2 bg-white ">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className=""
                  >
                    <span className="text-black p-[4px] text-lg	text-transform: lowercase">1<span className="text-transform: uppercase">P</span>assword.com  </span>
                    <KeyboardArrowDownIcon className="text-black"/>
                  </Button>
                  <Menu className="m-[-190px] ml-[0px]"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  ><h1 className="p-3 text-lg font-semibold">Is your account located in <br/> another region?</h1>
                    <MenuItem onClick={handleClose}><img src={drop1} alt="" /><span className="text-[#0053B3] text-lg font-medium">1Password.ca</span> <KeyboardArrowRightIcon className="text-blue-600 absolute m-[180px]"/></MenuItem>
                    <MenuItem onClick={handleClose}><img src={drop2} alt="" /><span className="text-[#0053B3] text-lg font-medium">1Password.eu</span> <KeyboardArrowRightIcon className="text-blue-600 absolute m-[180px]"/></MenuItem>
                    <MenuItem onClick={handleClose}><img src={drop3} alt="" /><span className="text-[#0053B3] text-lg font-medium">1Password.com</span> <KeyboardArrowRightIcon className="text-blue-600 absolute m-[180px]"/></MenuItem>
                  </Menu>
                </div>

              <div className="flex pt-[px] pl-[120px] ">
                <h1 className="text-blue-700 text-lg font-semibold">
                  Find my account
                </h1>
                <h1 className="p-1 flex justify-center">•</h1>
                <h1 className="text-blue-700 text-lg font-semibold">
                  Have a team account?
                </h1>
                <h1 className="p-1">•</h1>
                <h1 className="text-blue-700 text-lg font-semibold">
                  Create a new account
                </h1>
                {/* <h1 className='flex'><span>Version 1838 </span>— © 2024{" "} <span>1Password</span>. All rights
                reserved.4711 Yonge St,<br />10th Floor, Toronto,Ontario,M2N 6K8, Canada.</h1>*/}
              </div>
              <h1 className="pl-[120px] text-sm">
                <span className="text-blue-800">Version 1838</span> — © 2024{" "}
                <span className="text-blue-800">1Password</span>. All rights
                reserved.4711 Yonge St,
                <br /> 10th Floor, Toronto,Ontario,M2N 6K8, Canada.
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#1a285f] w-2/5 h-full">
            <div className="m-7 pt-3 pl-1 mt-23 ">
              <h1 className="bg-[#dfa4cf] w-16 p-[7px] flex justify-center rounded-lg font-semibold ">
                eBook
              </h1>
              <h1 className="text-white text-2xl font-semibold">
                Exploring shadow IT use cases
              </h1>
            </div>
            <img className="pl-7 w-[550px]" src={pic} alt="" />
            <p className="text-white flex text-xl p-7 flex-col">
              Shadow IT solves real problems for your employees. Banning it
              doesn't solve those problems - which is why understanding how they
              use it is the first step to securing access to it.
              <h2 className="text-white flex font-semibold text-xl mt-5">
                Download the eBook{" "}
              </h2>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
