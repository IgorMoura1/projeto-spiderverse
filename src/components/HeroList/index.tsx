"use client"; // mostramos que este arquivo é do lado do cliente para renderização no navegador
import { useState } from 'react';
import { spidermanFont } from "@/fonts"; // importando a fonte do titulo
import { IHeroData } from "@/interfaces/heroes"; // importando a interface de dados dos heróis
import styles from "./heroesList.module.scss"; // importando o módulo de estilos do componente
import HeroPicture from "../HeroPicture";
import { motion } from "framer-motion";
import Link from 'next/link';

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  const [focusedHero, setFocusedHero] = useState<string | null>(null);

  return (
    <>
      {/* para aplicar duas clases podemos usar o template string para concatenar as duas classes*/}
      {/* spidermanFont.className aplica um estilo na fonte */}
      {/* styles.title aplica estilos adicionais definidos no heroesList.module */}
      <motion.h1
        className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.5 }}
      >
        Personagens
      </motion.h1>
      <motion.section 
        className={styles.heroes}
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1.5}}
      >
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            className={`${styles.imageContainer} ${focusedHero && focusedHero !== hero.id ? styles.blurredAndDownsized : ''}`}
            onMouseEnter={() => setFocusedHero(hero.id)}
            onMouseLeave={() => setFocusedHero(null)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/hero/${hero.id}`}>
            <HeroPicture hero={hero} />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}
