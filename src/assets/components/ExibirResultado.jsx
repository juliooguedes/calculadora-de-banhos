import React from 'react'


const ExibirResultado=({resultado}) => {
    return (
        <div>
            {resultado ? (
                <div>
                    <h2>Melhor Petshop: {resultado.nome}</h2>
                    <p>Preço Total: R${resultado.preco}</p>
                </div>
            ) :(
                <p>Preencha os dados e clique em Calcular para ver o resultado</p>
            )}             
        </div>
    );
};

export default ExibirResultado