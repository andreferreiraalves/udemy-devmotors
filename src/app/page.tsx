import { Hero } from "@/components/hero";
import { SubMenu } from "@/components/home/subMenu";
import { getHomeData } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getHomeData();

  return (
    <main>
      <SubMenu />
      <Hero
        heading={object?.metadata?.heading}
        buttonUrl={object?.metadata?.cat_button?.url}
        buttonTitle={object?.metadata?.cat_button?.title}
        bannerUrl={object?.metadata?.banner?.imgix_url}
        icon={<Phone size={24} color="#ddd" />}
      />
    </main>
  );
}
