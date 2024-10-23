import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BannerAddForm from "@/components/Form/Banner-form/Add";
import { categoryApi } from "@/api/categoryApi";
import toast from "react-hot-toast";
import { subCategoryApi } from "@/api/subCategoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct() {
    try {
      const listOfCategories: any = await categoryApi.getCategoriesForProduct();
      const listOfSubCategories: any = await subCategoryApi.getSubCategoriesForProduct();
      return { listOfCategories:listOfCategories.data,listOfSubCategories:listOfSubCategories.data};
  
    } catch (error: any) {  
      toast.error(error.message);
      console.log(error)
    }
  }

const FormElementsPage = async () => {
    const response :any= await getProduct();
  const categories = response.listOfCategories.data;
  const subCategories = response.listOfSubCategories.data;
  return (
    <DefaultLayout>
      <BannerAddForm categoryList={categories} subCategoryList={subCategories}/>
    </DefaultLayout>
  );
};

export default FormElementsPage;
