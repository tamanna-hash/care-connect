import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "../../assets/logo1.jpeg";
const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex justify-center items-center">
        {/* <Image src={logo} alt="logo" width={100} height={100} className="w-20 h-10">
        </Image> */}
        <h1 className="font-bold text-2xl">Carec</h1>
      </Link>
    </div>
  );
};

export default Logo;
