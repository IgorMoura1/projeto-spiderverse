<h1 align="center">SPIDERVERSE 🕸️</h1>

###

<h3 align="left">👩‍💻 Sobre o projeto</h3>

###

<p align="left">Olá! Boas vindas ao projeto Spiderverse. <br>Projeto desenvolvido junto a DIO.ME, onde trata-se de uma aplicação interativa criada do zero baseando-se num protótipo no Figma.</p>

###

<h3 align="left">🛠 Tecnologias usadas</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/sass/CC6699" height="40" alt="sass logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/eslint/4B32C3" height="40" alt="eslint logo"  />
</div>

###

<h3 align="left">🤯 Tecnicas usadas</h3>

###

<p align="left">React.js (18v):<br>Utilização de hooks como useState, useEffect e useMemo para gerenciar o estado e os efeitos colaterais nos componentes funcionais.<br><br>Next.js:<br>Framework React para renderização do lado do servidor e geração de sites estáticos.<br>Uso da diretiva "use client"; para indicar que o arquivo deve ser renderizado do lado do cliente.<br><br>TypeScript:<br>Superset do JavaScript que adiciona tipagem estática ao código.<br>Utilização de interfaces (IHeroData, IProps) para tipar propriedades e dados.<br><br>Framer Motion:<br>Biblioteca para animações declarativas em React.<br>Uso de componentes motion.div e AnimatePresence para criar animações suaves e complexas.<br><br>SASS:<br>Pré-processador CSS que permite usar variáveis, aninhamento, mixins, etc.<br>Importação de módulos de estilos (carousel.module.scss, heroDetails.module.scss, heroesList.module.scss) para estilização dos componentes.<br><br>Gerenciamento de Estado:<br>useState para gerenciar estados locais, como visibleItems, activeIndex, startInteractionPosition, e focusedHero.<br>useMemo para memoizar valores calculados, como transitionAudio e voicesAudio, evitando recalculá-los em cada renderização.<br><br>Efeitos Colaterais:<br>useEffect para executar código que possui efeitos colaterais, como atualizar o fundo da página, tocar sons de transição, e calcular os itens visíveis no carrossel.<br>Dependências nos arrays de dependências dos hooks useEffect garantem que o efeito seja executado quando os valores dependentes mudam.<br><br>Interatividade e Animação:<br>Manipulação de eventos de drag e touch (onDragStart, onDragEnd, onTouchStart, onTouchEnd) para interações do usuário com o carrossel.<br>Animações usando motion.div e propriedades como initial, animate, exit e transition para criar transições suaves e responsivas.<br><br>Estrutura e Organização do Projeto:<br>Componentes organizados de forma modular em pastas específicas (Carousel, HeroDetails, HeroPicture, HeroesList).<br>Uso de arquivos de estilos específicos para cada componente, facilitando a manutenção e escalabilidade do código.<br><br>Acessibilidade e SEO:<br>Uso de tags semânticas e atributos apropriados para melhorar a acessibilidade.<br>Uso de Next.js para renderização do lado do servidor, melhorando o SEO da aplicação.<br><br>Melhoria de Performance:<br>Memoização de objetos e funções para evitar cálculos desnecessários e melhorar a performance.<br>Uso de técnicas de otimização de imagens e carregamento assíncrono de recursos.</p>

###

<h3 align="left">📂 Estrutura do projeto:<br>📁 public<br>....📁 icons<br>....📁 songs<br>....📁 spiders<br>📁 src<br>....📁 app<br>.... ....📁 api<br>.... .... ....📁 hero<br>.... .... .... ....📁 [id]<br>....📁 components<br>.... ....📁 Carousel<br>.... ....📁 HeroDetails<br>.... ....📁 HeroesList<br>.... ....📁 HeroPicture<br>....📁 fonts<br>....📁 interfaces</h3>

###

<h2 align="left">Como utilizar o projeto</h2>

###

<p align="left">Faça o download do Node.JS:<br>Link: https://nodejs.org/pt<br><br>Clone este projeto do GitHub ou copie o código fonte<br><br>Abra o terminal e navegue até o diretório raiz do projeto.<br><br>Instale as dependências do projeto executando o seguinte comando:<br>npm install<br><br>Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:<br>npm run dev  <br><br>O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço:<br>  http://localhost:3000<br>Caso a porta 3000 estiver em uso, automaticamente o Next.js irá subir na próxima porta livre da máquina.<br>A porta em uso aparecerá no terminal.<br><br>Agora é só utilizar do projeto em seu navegador :)</p>

###
