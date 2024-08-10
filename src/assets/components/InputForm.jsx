import React, { useState} from 'react'
import './InputForm.css'

const InputForm = ({calcular}) => {
    const [data, setData] = useState('');
    const [pequenos, setPequenos] = useState(0);
    const [grandes, setGrandes] = useState(0);

// Função para enviar os dados noo botão calcular 

    const enviar = (evento) => {
        evento.preventDefault();
        calcular(data, pequenos, grandes);
    };

    return (
        <form onSubmit={enviar}>
            <div>
                <label>Data:</label>
                <input
                type="date"
                value={data}
                onChange={(e) =>setData(e.target.value)}
                required />       
            </div>
            <div>
                <label>Quantidade de cães pequenos:</label>
                <input 
                type="number"
                value={pequenos}
                onChange={(e) =>setPequenos(e.target.value)} 
                required />
            </div>
            <div>
                <label>Quantidade de cães grandes:</label>
                <input 
                type="number"
                value={grandes}
                onChange={(e) =>setGrandes(e.target.value)} 
                required />
            </div>
            <div>
                <button className='buttonCalcular' type="submits">Calcular</button>
            </div>
        </form>
    );
};

export default InputForm