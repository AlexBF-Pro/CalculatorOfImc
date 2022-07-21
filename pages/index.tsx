import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import styles from "../styles/Home.module.css";

export function calculate(
  peso: number,
  altura: number
) {
  const IMC = +(peso / (altura * altura)).toFixed(2);
  if (IMC <= 18.4) {
    return IMC + ' - Magreza';
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    return IMC + ' - Normal!';
  } else if (IMC >= 25 && IMC <= 29.9) {
    return IMC + ' - Sobrepeso!';
  } else if (IMC >= 30 && IMC <= 39.9) {
    return IMC + ' - Obesidade!';
  } else IMC >= 40 
    return IMC + ' - Obesidade grave!';
}

const Home: NextPage = ():ReactElement => {
  const [result, setResult] = useState<number>();

  function handleSubmit(e: any) {
    e.preventDefault();
    setResult(
      calculate(+e.target[0].value, +e.target[1].value),
    );
  }

  return (
    <div className={styles.container}>
      <h1>Calculadora de Índice de Massa Corporal (IMC)</h1>
      <main className={styles.main}>
        <form action="" onSubmit={handleSubmit}>
          <h2>Peso</h2>
          <input className={styles.camp} id="peso" type="text" />
          <h2>Altura</h2>
          <input className={styles.camp} id="altura" type="text" />
          <button className={styles.button} type="submit">Calculate</button>
          </form>
          <span className={styles.info}>{result}</span>
      </main>
    </div>
  )
};

export default Home;
