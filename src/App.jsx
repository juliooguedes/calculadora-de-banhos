import React, { useState } from "react";
import "./App.css"
import ListaPetshops from "./assets/components/ListadePetshop";
import InputForm from "./assets/components/InputForm";
import ExibirResultado from "./assets/components/ExibirResultado"
import Caes from "./assets/img/caes.png"

function App() {
  const [resultado, setResultado] = useState(null);

  const calcularMelhorPetShop = (data, pequenos, grandes) => {

    // Verificar se a quantidade de cães é zero
    if (pequenos === 0 && grandes === 0) {
      setResultado(null); // Não exibir resultado
      return;
    }

    const diaSemana = new Date(data).getUTCDay(); // 0 = Domingo 6 = Foi utilizado getUTCDay para garantir a data correta, mesmo em caso alterações de fuso horário.

    // Calculando preço Meu Canino Feliz
    const precoMeuCaninoFeliz = diaSemana === 0 || diaSemana === 6
      ? (pequenos * 24) + (grandes * 48)
      : (pequenos * 20) + (grandes * 40);

    // Calculando preço Vai Rex
    const precoVaiRex = diaSemana === 0 || diaSemana === 6

      ? (pequenos * 20) + (grandes * 55)
      : (pequenos * 15) + (grandes * 50);

    // Calculando preço ChowChagas
    const precoChowChagas = (pequenos * 30) + (grandes * 45)

    // Lista de objetos com os preços e distâncias dos petshops
    const precos = [
      { nome: "Meu Canino Feliz", preco: precoMeuCaninoFeliz, distancia: 2 },
      { nome: "Vai Rex", preco: precoVaiRex, distancia: 1.7 },
      { nome: "Chow Chagas", preco: precoChowChagas, distancia: 0.8 },
    ];

    // Ordenando os petshops pelo preço e, em caso de empate, pela distância
    const melhorPetShop = precos.sort((a, b) => a.preco - b.preco || a.distancia - b.distancia)[0];

    // Atualizando com o melhor petshop encontrado
    setResultado(melhorPetShop);
  };

  return (
    <div className="App">
      <h1>Calculadora de Banhos para Cães</h1>
      <InputForm calcular={calcularMelhorPetShop} />
      <ExibirResultado resultado={resultado} />
      <ListaPetshops />
      <img src={Caes} alt="Varios cães juntos" />
    </div>
  );
};
export default App