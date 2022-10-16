
const projects =  [
    { "id":"gta-radios",
      "logo":"https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/logos/gta-radios.png",
      "name":"GTA Radios",
      "year":"2022",
      "backdrop_path":"",
      "about":"Aplicativo de rádios com as estações da franquia de games Grand Theft Auto.",
      "screenshots":[
        
        "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/gta-radios-mobile.jpg"
      ],
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
      "logo":"https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/logos/top-series.png",
      "name":"Top Séries",
      "year":"2022",
      "backdrop_path":"",
      "about":"Catálogo de séries de TV.",
      "screenshots":[
        "https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/screenshots/top-series-desktop.gif",
        "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-1.jpg",
        "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-2.jpg",
        "https://raw.githubusercontent.com/JD-Rodrigues/domingos-rodrigues/main/public/images/screenshots/top-series-mobile-3.jpg.jpg"
      ],
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
      "logo":"",
      "name":"Comanda Fácil",
      "year":"2022",
      "backdrop_path":"",
      "about":"Aplicativo web de comanda digital para restaurantes e lanchonetes.",
      "screenshots":[
        "",
        "",
        ""
      ],
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
      "logo":"",
      "name":"Controle Financeiro",
      "year":"2022",
      "backdrop_path":"",
      "about":"Aplicativo de controle financeiro feito em Javascript puro.",
      "screenshots":[
        "",
        "",
        ""
      ],
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
      "logo":"",
      "name":"Paytab",
      "year":"2022",
      "backdrop_path":"",
      "about":"Aplicativo que simula o envio de dinheiro para recebedores cadastrado em uma lista do usuário e simula a validação de cartões cadastrados.",
      "screenshots":[
        "",
        "",
        ""
      ],
      "objective":"Praticar React ao consumir uma API que simula a validação de cartões realizada por um gateway de pagamentos.",
      "features":"",
      "tools":"",
      "aditional_info":""
    }
  ]




export default projects
