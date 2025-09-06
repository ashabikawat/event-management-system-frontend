import Dashboard from "@/app/views/dashboard/Dashboard";
import LayoutWrapper from "@/utils/layoutWrapper";
import React from "react";

const page = () => {
  return <LayoutWrapper children={<Dashboard />} />;
};

export default page;
