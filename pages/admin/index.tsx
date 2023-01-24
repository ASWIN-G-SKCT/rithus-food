import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <Link href="/admin/add-product">Add a Product</Link>
      <br />
      <Link href="/admin/hot-deals">Hot Deals</Link>
      <br />
      <Link href="/admin/discounts">Discounts</Link>
      <br />
      <Link href="/admin/orders">Orders</Link>
      <br />
      <Link href="/admin/payments">Payments</Link>
      <br />
      <Link href="/admin/categories">Categories</Link>
    </div>
  );
};

export default Admin;
