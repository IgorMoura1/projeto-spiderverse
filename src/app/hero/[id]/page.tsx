import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN}/api/heroes`);
  if (!res.ok) {
    throw new Error("Falha na requisição de lista dos heróis"); 
  }
  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData();
  return <Carousel heroes={heroes} activeId={id} />;
}
