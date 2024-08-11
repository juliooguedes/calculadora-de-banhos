import React from 'react';

const ListaPetshops = () => {
  
  // Dados dos petshops
  const petshops = [
    {
      nome: "Meu Canino Feliz",
      precoSemanaPequeno: 20,
      precoSemanaGrande: 40,
      precoFdsPequeno: 24,
      precoFdsGrande: 48,
      distancia: "2km"
    },
    {
      nome: "Vai Rex",
      precoSemanaPequeno: 15,
      precoSemanaGrande: 50,
      precoFdsPequeno: 20,
      precoFdsGrande: 55,
      distancia: "1.7km"
    },
    {
      nome: "ChowChawgas",
      precoSemanaPequeno: 30,
      precoSemanaGrande: 45,
      precoFdsPequeno: 30, // Preço igual durante toda a semana
      precoFdsGrande: 45,  // Preço igual durante toda a semana
      distancia: "0.8km"
    }
  ];

  return (
    <div>
      <h2>Preço praticado nas Petshops Disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço Durante a Semana (pq)</th>
            <th>Preço Durante a Semana (gr)</th>
            <th>Preço Final de Semana (pq)</th>
            <th>Preço Final de Semna (gr)</th>
            <th>Distância (km)</th>
          </tr>
        </thead>
        <tbody>
          {petshops.map((petshop, index) => (
            <tr key={index}>
              <td>{petshop.nome}</td>
              <td>R${petshop.precoSemanaPequeno}</td>
              <td>R${petshop.precoSemanaGrande}</td>
              <td>R${petshop.precoFdsPequeno}</td>
              <td>R${petshop.precoFdsGrande}</td>
              <td>{petshop.distancia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPetshops;