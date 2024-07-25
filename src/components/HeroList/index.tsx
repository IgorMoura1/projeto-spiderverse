import { spidermanFont } from "@/fonts"; // importando a fonte do titulo
import { IHeroData } from "@/interfaces/heroes"; // importando a interface de dados dos heróis
import styles from "./heroesList.module.scss"; // importando o módulo de estilos do componente
import HeroPicture from "../HeroPicture";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      {/* para aplicar duas clases podemos usar o template string para concatenar as duas classes*/}
      {/* spidermanFont.className aplica um estilo na fonte */}
      {/* styles.title aplica estilos adicionais definidos no heroesList.module */}
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        Personagens
      </h1>
      <section className={styles.heroes}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <HeroPicture hero={hero} />
          </div>
        ))}
      </section>
    </>
  );
}
