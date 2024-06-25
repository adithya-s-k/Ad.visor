import Image from "next/image";
import HeroSectionGradientBackground from "@/components/hero";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const user = await currentUser();
  console.log(user);
  return (
          <HeroSectionGradientBackground />

  );
}
