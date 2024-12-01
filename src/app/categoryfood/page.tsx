import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import CategoryfoodTable from "@/components/Tables/categoryfood";

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
    name:'Categories ',
    link:'/categoryfood'
  },
];

async function getAllBrands() {
try {
  const response = await brandApi.getAllBrands();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  // const response = await getAllBrands()
  // const brands = response.data.brands
  const categories: any = [{
    _id:1,
    categoryName:'ctg1',
    

  }]
  return (
    <DefaultLayout>
      <Breadcrumb pageName="categories" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <CategoryfoodTable listOfUniversity={categories}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
