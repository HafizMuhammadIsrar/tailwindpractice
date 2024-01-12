import React from "react";
import { Icon } from "@iconify/react";
function MicrosoftClone() {
  return (
    <>
      <div className="navbar flex justify-between items-center  p-4">
        <div className="flex justify-between items-center gap-3 md:order-2">
          <div className="hamburger inline-block   cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>

          <div className="search md:hidden">
            <Icon icon="material-symbols-light:search" width="20" height="20" />
          </div>
        </div>

        <div className="logo flex justity-center items-center gap-3 text-center md:order-1">
          <Icon icon="logos:microsoft-icon" width="20" height="20" />
          <div className="md:text-xl font-medium md:font-semibold">
            Microsoft
          </div>
          <div className="features md:flex w-fit md:w-auto bg-gray-200 md:bg-white mx-4 space-x-2 absolute md:static  inset-0 -translate-x-96 md:translate-x-0 ">
            <div className="fitem">Microsoft 365</div>
            <div className="fitem">Office</div>
            <div className="fitem">Copilot</div>
          </div>
        </div>
        <div className="cart text-center flex justify-between items-center gap-3 md:order-3">
          {" "}
          <div className="search hidden md:block">
            <Icon icon="material-symbols-light:search" width="20" height="20" />
          </div>
          Account
        </div>
      </div>
    </>
  );
}

export default MicrosoftClone;
