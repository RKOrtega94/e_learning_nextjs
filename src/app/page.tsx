import SplashComponent from "@/presentation/components/splash/splash_component";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
