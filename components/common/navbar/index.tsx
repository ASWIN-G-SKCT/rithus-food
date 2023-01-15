import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state: any) => state?.auth);
  const { pathname } = useRouter();
  console.log(user);
  return (
    <div>
      <div>
        <h1>Rithus Food</h1>
      </div>
      {pathname === "/" && user?.admin && <Link href={"/admin"}>Admin</Link>}
    </div>
  );
};

export default Navbar;
