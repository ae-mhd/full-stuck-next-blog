import Link from "next/link";
import styles from "./homepage.module.css";
import { CardList, CategoryList, Featured, Menu } from "@/components";

export default function Home() {
  return <div >
    <Featured />
    <CategoryList />
    <div>
      <CardList />
      <Menu />
    </div>

  </div>;
}
