import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SubCategoryTable from "@/components/Tables/SubCategory";
import { PackageNavigation } from "@/types/packageNavigation";
import toast from "react-hot-toast";
import { subCategoryApi } from "@/api/subCategoryApi";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};


const packageData: PackageNavigation[] = [
  {
    name:'Dashboard / ',
    link:'/'
  },
  {
    name:'Sub-Categories ',
    link:'/tables/subCategories'
  },
];

async function getAllSubCategories() {
try {
  const response = await subCategoryApi.getAllSubCategories();
  return response.data;
} catch (error:any) {
  toast.error(error.message)
  console.log(error)
}
}

const TablesPage = async () => {
  const response = await getAllSubCategories()
  const subCategories = response.data.subCategories
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <SubCategoryTable listOfSubCategories={subCategories}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;