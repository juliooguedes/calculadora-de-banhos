# Calculadora de Banhos para Cães

Este projeto tem como objetivo auxiliar o Sr. Eduardo, proprietário de um canil em Belo Horizonte, a encontrar o melhor petshop para realizar os banhos de seus cães, levando em consideração o preço e a proximidade.

## 🚀 Instruções para Executar o Sistema

1. **Clonar o Repositório**
   
   Clone o repositório para a sua máquina local usando o comando:

   ```bash
   git clone https://github.com/juliooguedes/calculadora-de-banhos.git
 
2. **Instalar as Dependências**

    Navegue até o diretório do projeto e instale as dependências necessárias:

   ```bash
   cd calculadora-de-banhos
   npm install

3. **Executar o Projeto**

Para iniciar o projeto localmente, utilize o comando:

      npm run dev

📋 **Lista de Premissas Assumidas**

**Distância é relevante apenas em caso de empate nos preços:** O petshop mais próximo será escolhido apenas se dois ou mais petshops tiverem o mesmo preço total.<br>
**A data fornecida é sempre válida:** Assume-se que o usuário insere uma data válida no formato aceito pelo campo input[type="date"].<br>
**O número de cães é sempre um número inteiro:** Considera-se que o usuário insere valores numéricos válidos para a quantidade de cães pequenos e grandes.<br>
**Os preços dos banhos são fixos e não mudam além dos ajustes para dias úteis e fins de semana.**

🧠 **Decisões de Projeto**

**Lógica Simples:** A lógica do projeto foi implementada de forma simples e clara, com o código principal concentrado em App.jsx para facilitar a compreensão.
  Além disso, o projeto foi organizado em componentes adicionais, como InputForm.jsx para capturar dados de entrada, ExibirResultados.jsx para exibir o resultado final, e ListaDePetshops.jsx para gerenciar e mostrar informações dos petshops.
  Essa estrutura modular melhora a legibilidade e escalabilidade do código, mantendo-o acessível e fácil de manter.<br>
**Uso de getUTCDay() para Identificar Dias da Semana:** A função getUTCDay() é utilizada para determinar o dia da semana, identificando se é um dia útil ou fim de semana, para garantir a correta identificação independentemente do fuso horário do usuário. o que influencia os preços dos banhos. para garantir a correta identificação do dia da semana independentemente do fuso horário do usuário.<br>
**Interface de Usuário:** A interface foi projetada de forma intuitiva, com campos de entrada para a data e a quantidade de cães, acompanhados por um botão "Calcular"e uma lista detalhada dos preços praticados por cada petshop. <br>
**Empate Resolvido pela Proximidade:** Em caso de empate no preço total, o petshop mais próximo do canil é escolhido como o melhor.<br>

🔍**O que mais você achar importante compartilhar**

**Facilidade de Expansão:** Embora o projeto atual seja simples, ele foi estruturado de maneira que novas funcionalidades ou ajustes nos critérios de escolha do petshop possam ser implementados.
**Possível Melhorias Futuras:** O projeto pode ser aprimorado com a adição de testes unitários, uma interface moderna, e integração com um backend para persistência dos dados ou consultas em tempo real.
**Compatibilidade com Diferentes Fusos Horários:** A lógica de data foi implementada considerando o fuso horário local do navegador, o que pode ser ajustado para cenários específicos, caso necessário.




