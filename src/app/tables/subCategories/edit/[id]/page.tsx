import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SubCategoryEditForm from "@/components/Form/SubCategory-form/Update";
import toast from "react-hot-toast";
import { subCategoryApi } from "@/api/subCategoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getSubCategory(id:string) {
  try {
    const response = await subCategoryApi.getSubCategory(id);
    return response.data;
  } catch (error:any) {
    toast.error(error.message)
    console.log(error)
  }
}

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  const response = await getSubCategory(params.id)
  const subCategory = response.data
  return (
    <DefaultLayout>
      <SubCategoryEditForm subCategoryId={params.id} getSubCategory={subCategory}/>
    </DefaultLayout>
  );
};

export default FormElementsPage;
