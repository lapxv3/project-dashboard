import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import StaffTable from "@/components/Tables/staff";

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
    name:'Staffs ',
    link:'/tables/staff'
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
  const staffs: any = [{
    _id:1,
    staffName:'stf1',
    

  }]
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Staffs" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <StaffTable listOfBrands={staffs}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
