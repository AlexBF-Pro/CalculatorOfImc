import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import styles from "../styles/Home.module.css";

export function calculate(
  peso: number,
  altura: number
) {
  const IMC = +(peso / (altura * altura)).toFixed(2);
  if(IMC >= 18.5 && IMC <= 24.9) {
    console.log('Normal!');
  } else if (IMC >= 25 && IMC <= 29.9) {
    console.log('Sobrepeso!');
  } else if (IMC >= 30 && IMC <= 39.9) {
    console.log('Obesidade!');
  } else {
    console.log('Obesidade Grave!');
  }
return IMC
}

const Home: NextPage = ():ReactElement => {
  const [result, setResult] = useState<number>();

  function handleSubmit(e: any) {
    e.preventDefault();
    setResult(
      calculate(+e.target[0].value, +e.target[1].value)
    );

  }

  return <div className={styles.container}>
        <main className={styles.main}>
          <form action="" onSubmit={handleSubmit}>
            <input id="peso" type="text" />
            <input id="altura" type="text" />
            <button type="submit">Calculate</button>
          </form>
          <span>{result}</span>
        </main>
      </div>
};

export default Home;
