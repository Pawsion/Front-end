import React from "react";
import MainHeader from "./main-header";
import PhoneHeader from "./phone-header";

export default function Header() {
  return (
    <>
      <div className="hidden w-full lg:block">
        <MainHeader />
      </div>
      <div className="block w-full lg:hidden">
        <PhoneHeader />
      </div>
    </>
  );
}
