import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <Link href="/admin/add-product">Add a Product</Link>
      <br />
      <Link href="/admin/hot-deals">Hot Deals</Link>
    </div>
  );
};

export default Admin;
