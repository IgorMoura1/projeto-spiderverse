import HeroesList from "@/components";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./page.module.scss";

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN}/api/heroes`);
  if (!res.ok) {
    throw new Error("Falha na requisição de lista dos heróis"); 
  }
  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();
  console.log(heroes);
  return (
      <main className={styles.main}>
        <HeroesList heroes={heroes} />
      </main>
  );
}