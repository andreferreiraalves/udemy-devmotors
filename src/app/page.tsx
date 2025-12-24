import { Hero } from "@/components/hero";
import { SubMenu } from "@/components/home/subMenu";
import { getHomeData } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";

export default async function Home() {
  const { object }: HomeProps = await getHomeData();

  return (
    <main>
      <SubMenu />
      <Hero />
    </main>
  );
}
