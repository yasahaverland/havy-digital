import { coorp, personal, smallbusiness, wallet, app } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Nossa Empresa",
    },
    {
      id: "services",
      title: "Serviços",
    },
    {
      id: "contact",
      title: "Abra Sua Conta",
    },
  ];

  const features = [
    {
      title: "Carteira Digital",
      icon: wallet,
    },
    {
      title: "Nosso App",
      icon: app,
    },
  ];
  
  const services = [
    {
      title: "Pessoal",
      intro: "Nossa conta Havy Personal foi projetada para tornar o gerenciamento de suas finanças simples e conveniente. ",
      icon: personal,
      iconBg: "#383E56",
      points: [
        "Com nosso aplicativo inovador, você pode acompanhar facilmente seu orçamento, depositar cheques e monitorar suas transações em tempo real. Nosso aplicativo também permite que você transfira fundos facilmente e pague contas de qualquer lugar, dando a você a liberdade de administrar seu dinheiro onde e quando quiser.",
        "Além disso, nossa conta oferece taxas de juros competitivas e transparentes, sem taxas ocultas, ajudando você a economizar dinheiro ao longo do tempo.",
        "Como vantagem, oferecemos um programa exclusivo de reembolso que recompensa você por comprar nas suas lojas e restaurantes favoritos.",
      ],
    },
    {
      title: "Pequenos Negocios",
      intro: "Nossa conta Havy Small Business é a solução bancária perfeita para empreendedores e proprietários de pequenas empresas. ",
      icon: smallbusiness,
      iconBg: "#E6DEDD",
      points: [
        "Com nosso app costumizado para sua empresa, você pode agilizar suas operações financeiras e economizar tempo e dinheiro.",
        "CNossa conta oferece transferências ACH gratuitas, ferramentas de faturamento e banco móvel, ajudando você a gerenciar suas finanças com mais eficiência.",
        "Além disso, nossa análise de dados mostra que nossos clientes economizam em média 25% em taxas e transações bancárias em comparação com outros bancos líderes.",
        "Também oferecemos taxas de juros competitivas em contas de poupança e CDs, ajudando você a expandir seus negócios ao longo do tempo.",
      ],
    },
    {
      title: "Multinacionais",
      intro: "Nossa conta Havy Corporate foi projetada para atender às necessidades únicas de multinacionais",
      icon: coorp,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Nossa tecnologia inovadora e serviços financeiros especializados permitem que você administre seu dinheiro com segurança, não importa onde você esteja no mundo.",
        "Nossa conta oferece serviços avançados de gestão de tesouraria, incluindo gestão de caixa, pagamentos internacionais e ferramentas de gestão de risco.",
        "Além disso, nossa equipe de especialistas financeiros está disponível para fornecer consultoria e orientação especializada, garantindo que sua empresa esteja sempre operando com desempenho máximo",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sou cliente do Havy Digital há mais de um ano e não poderia estar mais feliz com seus serviços. O aplicativo deles é muito fácil de usar e realmente me ajudou a controlar meu orçamento. Adoro como posso depositar cheques e transferir fundos com apenas alguns toques no meu celular. Além disso, o programa de cashback deles é incrível! Ganhei centenas de reais apenas usando meu cartão de débito Havy Digital para compras diárias. Obrigada, Havy Digital!",
      name: "Valéria B.",
      designation: "Cliente",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Como CFO de uma multinacional, eu precisava de uma solução bancária que pudesse lidar com nossas complexas necessidades financeiras. O Havy Digital tem sido o parceiro perfeito para nós. Seus serviços avançados de gestão de tesouraria nos permitiram administrar nosso fluxo de caixa com mais eficiência, e suas ferramentas de gestão de risco nos ajudaram a mitigar nossa exposição a riscos financeiros. Além disso, sua equipe de especialistas financeiros tem sido inestimável ao nos fornecer conselhos e orientações especializadas. Não poderíamos ter alcançado nossos objetivos financeiros sem o Havy Digital.",
      name: "Ana Paula S.",
      designation: "CFO",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "Como proprietário de uma pequena empresa, estava lutando para administrar minhas finanças com eficiência. Mas desde que mudei para o Havy Digital, tudo se tornou muito mais fácil. Suas ferramentas de faturamento e serviços bancários móveis economizaram muito tempo para mim e adoro como posso transferir fundos para meus vendedores e fornecedores gratuitamente. E a melhor parte? Suas taxas são muito mais baixas do que eu estava pagando antes. Estou tão feliz por ter mudado para o Havy Digital!",
      name: "Tosh R.",
      designation: "Empreendedor",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  
  
  export { services, testimonials, features };