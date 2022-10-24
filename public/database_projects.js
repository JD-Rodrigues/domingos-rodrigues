
const projects =  [
    { "id":"gta-radios",
      "logo":"https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/logos/gta-radios.png",
      "name":"GTA Radios",
      "year":"2022",
      "backdrop_path":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/backgrounds/gta-radios-backdrop.jpg?raw=true",
      "about":"Aplicativo de rádios com as estações da franquia de games Grand Theft Auto.",
      "live":"https://gta-radios.vercel.app",
      github: "https://github.com/JD-Rodrigues/GTA-radios",
      "demo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/gta-radios-desktop.gif?raw=true",
      "screenshots":{
        pc:"",
        tablet:"",
        smartphone:[
          "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/gta-radios-mobile.jpg"
        ]
      },
      "objective":"Projeto desenvolvido com o intuito de praticar o uso da biblioteca React na implementação de diversos players de audio personalizados, consumindo urls de transmissão de um servidor de rádios.",
      "features":[
        "Rádios segmentadas de diferentes títulos da franquia.",
        "O botão play/pause da estação em reprodução assume a forma de uma roda de carro giratória (referência estética ao jogo).",
        "Uma estação é pausada automaticamente quando outra é reproduzida.",
        "Responsivo."
      ],
      "tools":[
        "React",
        "Typescript",
        "URL's de transmissão do servidor de rádios Zeno FM"
      ],
      "aditional_info":"Algumas estações podem ficar off-line temporariamente. É uma instabilidade momentânea do servidor de rádios utilizado. Em uma futura amplicação do projeto serão consideradas alternativas ao serviço de streaming atual. Mas, até o momento, ele atendeu o objetivo do projeto, que foi praticar o uso das tecnologias supracitadas."
    },
    { "id":"top-series",
      "logo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/logos/top-series-logo.png?raw=true",
      "name":"Top Séries",
      "year":"2022",
      "backdrop_path":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/backgrounds/top-series-backdrop.jpg?raw=true",
      "about":"Catálogo de séries de TV.",
      "live":"https://top-series.vercel.app",
      github:"https://github.com/JD-Rodrigues/top-series",
      "demo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/top-series-desktop.gif?raw=true",
      "screenshots":{
        pc:"",
        tablet:"",
        smartphone:[
          "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-1.jpg",
          "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-2.jpg",
          "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-3.jpg.jpg"
        ]
      },
      "objective":"Projeto desenvolvido para praticar o consumode API utilizando React e Typescript.",
      "features":[
        "Lista as séries mais populares.",
        "Lista as séries mais votadas.",
        "Lista as séries que estão em lançamento.",
        "Lista as séries com episódios em exibição hoje.",
        "Permite busca de séries.",
        "Responsivo."
      ],
      "tools":[
        "React",
        "Typescript",
        "API do banco de séries e filmes TMDB"
      ],
      "aditional_info":""
    },
    {
      "id":"comanda-facil",
      "logo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/logos/easy-comanda-logo.png?raw=true",
      "name":"Comanda Fácil",
      "year":"2022",
      "backdrop_path":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/backgrounds/easy-comanda-backdrop.jpg?raw=true",
      "about":"Aplicativo web de comanda digital para restaurantes e lanchonetes.",
      "live":"https://comanda-facil.vercel.app",
      github: "https://github.com/JD-Rodrigues/comanda-facil",
      "demo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot.gif?raw=true",
      "screenshots":{
        pc:"",
        tablet:"",
        smartphone:[        
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot-5.jpg?raw=true",
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot-4.jpg?raw=true",
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot-6.jpg?raw=true",
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot-2.jpg?raw=true",
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/comanda-facil-screenshot-3.jpg?raw=true"
        ]
      },
      "objective":"Facilitar o atendimento por parte de garçons, pessoal da cozinha e caixa, substituindo a comanda física e oferecendo funcionalidades que faltam em outras aplicações deste tipo.",
      "features":[
        "Cadastro de produtos no estoque",
        "Criação e fechamento de comandas",
        "Adição e remoção de itens de comandas",
        "Cálculo automático de valor gasto por comanda e por cada item nela.",
      ],
      "tools":[
        "React",
        "HTML",
        "CSS"
      ],
      "aditional_info":"A aplicação atualmente é um MVP. Implementações adicionais serão feitas, dentre elas o compartilhamento das atividades e relatório em tempo real com um computador central e com o pessoal da cozinha, permitindo-os saber a ordem dos pedidos das comandas registradas por todos os garçons."
    },
    {
      "id":"controle-financeiro",
      "logo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/logos/controle-fianceiro-logo.png?raw=true",
      "name":"Controle Financeiro",
      "year":"2022",
      "backdrop_path":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/backgrounds/controle-financeiro-backdrop.jpg?raw=true",
      "about":"Aplicativo de controle financeiro feito em Javascript puro.",
      "live":"https://jd-rodrigues.github.io/controle-financeiro",
      github:"https://github.com/JD-Rodrigues/controle-financeiro",
      "demo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/controle-financeiro-demo.gif?raw=true",
      "screenshots":{
        pc:"",
        tablet:"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/controle-financeiro-tablet.png?raw=true",
        smartphone:[
          "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/controle-financeiro-celular.png?raw=true"
        ]
      },
      "objective":"Praticar o desenvolvimento de lógica de negócios em Javascript puro.",
      "features":[
        "Cadastra transações de compra e venda, recebendo nome do produto, valor e tipo de transação.",
        "Mostra o relatório de transações cadastradas, indicando '-' para compra e '+' para venda.",
        "Calcula despesa e receita, indicando total com a informação de lucro ou prejuízo.",
        "Salva as informações no LocalStorage.",
        "Responsivo para PC, tablet e celular."
      ],
      "tools":[
        "HTML",
        "CSS",
        "Javascript"
      ],
      "aditional_info":""
    },
    {
      "id":"paytab",
      "logo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/logos/paytab-logo.png?raw=true",
      "name":"Paytab",
      "year":"2022",
      "backdrop_path":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/backgrounds/paytab-backdrop.jpg?raw=true",
      "about":"Aplicativo que simula o envio de dinheiro para recebedores cadastrado em uma lista do usuário e simula a validação de cartões cadastrados.",
      "live":"https://jd-rodrigues.github.io/paytab",
      github:"https://github.com/JD-Rodrigues/paytab",
      "demo":"https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/paytab-screen-demo.gif?raw=true",
      "screenshots":{
        pc:"",
        tablet:"",
        smartphone:[]
      },
      "objective":"Praticar React ao consumir uma API que simula a validação de cartões realizada por um gateway de pagamentos.",
      "features":[],
      "tools":"",
      "aditional_info":""
    }
  ]




export default projects
