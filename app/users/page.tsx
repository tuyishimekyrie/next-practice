import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>User page</p>
      <Link href="/users/new">New Page</Link>
    </div>
  );
};

export default page;
