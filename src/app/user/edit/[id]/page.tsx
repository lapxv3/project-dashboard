import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import UserEditForm from "@/components/Form/User-form/Update";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};


const FormElementsPage = async ({params}:{params:{id:string}}) => {
  return (
    <DefaultLayout>
  
      <UserEditForm/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
