import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import StaffEditForm from "@/components/Form/Staff-form/Update";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};


const FormElementsPage = async ({params}:{params:{id:string}}) => {
  return (
    <DefaultLayout>
  
      <StaffEditForm/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
