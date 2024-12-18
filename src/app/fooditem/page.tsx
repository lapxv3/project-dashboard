import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import FooditemTable from "@/components/Tables/fooditem";

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
    name:'Foods ',
    link:'/fooditem'
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
  const foods: any = [{
    _id:1,
    foodName:'fd1',
    

  }]
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Foods" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <FooditemTable listOfUniversity={foods}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
