import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BannerTable from "@/components/Tables/Banner";
import Delete from "@/components/Confirmation/Delete";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { bannerApi } from "@/api/bannerApi";
import { PackageNavigation } from "@/types/packageNavigation";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const packageData: PackageNavigation[] = [
  {
    name: "Dashboard / ",
    link: "/",
  },
  {
    name: "Banners ",
    link: "/tables/banners",
  },
];

async function getAllBanners() {
  try {

    const response = await bannerApi.getAllBanners();
    return response.data;

  } catch (error: any) {

    console.log(error);
    toast.error(error.message);

  }
}

const TablesPage = async () => {

  const response = await getAllBanners();
  const banners = response.data.banners;

  return (

    <DefaultLayout>
      <Breadcrumb pageName="Banners" navigation={packageData} />
      <div className="flex flex-col gap-10">
        <BannerTable listOfBanners={banners} />
      </div>
    </DefaultLayout>

  );
};

export default TablesPage;
