import type {
  FaqItem,
  GalleryPhoto,
  HeroTreatment,
  Step,
  TechFeature,
  Testimonial,
  TreatmentCard,
} from "@/types/clinica-alva";

const IMG = "/images";

export const WHATSAPP_URL =
  "https://wa.me/5531997426185?text=Ol%C3%A1%21%20Encontrei%20o%20site%20da%20Cl%C3%ADnica%20Alva%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

export const CLINIC_ADDRESS = "Rua Sergipe, 1440 — Savassi, Belo Horizonte — MG";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Sergipe+1440+Savassi+Belo+Horizonte+MG";

export const heroTreatments: HeroTreatment[] = [
  {
    slug: "depilacao-laser",
    label: "Depilação a laser",
    description:
      "Tecnologia aplicada conforme região, fototipo e avaliação individual.",
    beforeImage: `${IMG}/depilacao-laser-antes.png`,
    afterImage: `${IMG}/depilacao-laser-depois.png`,
    beforeAlt:
      "Axila com pelos visíveis, antes do tratamento de depilação a laser — imagem ilustrativa criada para este projeto fictício",
    afterAlt:
      "Axila com pele lisa, depois do tratamento de depilação a laser — imagem ilustrativa criada para este projeto fictício",
  },
  {
    slug: "botox",
    label: "Botox",
    description:
      "Procedimento realizado por profissional habilitado, após análise das indicações e contraindicações.",
    beforeImage: `${IMG}/botox-antes.png`,
    afterImage: `${IMG}/botox-depois.png`,
    beforeAlt:
      "Rosto com linhas de expressão marcadas na testa, antes do tratamento com Botox — imagem ilustrativa criada para este projeto fictício",
    afterAlt:
      "Rosto com testa lisa e relaxada, depois do tratamento com Botox — imagem ilustrativa criada para este projeto fictício",
  },
  {
    slug: "laser-skin",
    label: "Laser Skin",
    description:
      "Protocolo voltado ao cuidado com textura, luminosidade e uniformidade visual da pele.",
    beforeImage: `${IMG}/laser-skin-antes.png`,
    afterImage: `${IMG}/laser-skin-depois.png`,
    beforeAlt:
      "Pele do rosto com textura irregular e manchas leves, antes do tratamento Laser Skin — imagem ilustrativa criada para este projeto fictício",
    afterAlt:
      "Pele do rosto com aspecto mais uniforme e luminoso, depois do tratamento Laser Skin — imagem ilustrativa criada para este projeto fictício",
  },
  {
    slug: "laser-acne",
    label: "Laser Acne",
    description:
      "Tecnologia utilizada em protocolos individualizados para cuidados com acne e marcas superficiais.",
    beforeImage: `${IMG}/laser-acne-antes.png`,
    afterImage: `${IMG}/laser-acne-depois.png`,
    beforeAlt:
      "Pele do rosto com acne visível, antes do tratamento Laser Acne — imagem ilustrativa criada para este projeto fictício",
    afterAlt:
      "Pele do rosto com acne visivelmente reduzida, depois do tratamento Laser Acne — imagem ilustrativa criada para este projeto fictício",
  },
];

export const treatments: TreatmentCard[] = [
  {
    number: "01",
    slug: "depilacao-a-laser",
    title: "Depilação a laser",
    description:
      "Redução de pelos com tecnologia a laser, ajustada conforme região, fototipo e avaliação individual.",
  },
  {
    number: "02",
    slug: "laser-skin",
    title: "Laser Skin",
    description:
      "Protocolo voltado ao cuidado com textura, luminosidade e uniformidade visual da pele.",
  },
  {
    number: "03",
    slug: "laser-acne",
    title: "Laser Acne",
    description:
      "Tecnologia utilizada em protocolos individualizados para cuidados com acne e marcas superficiais.",
  },
  {
    number: "04",
    slug: "botox",
    title: "Botox",
    description:
      "Procedimento realizado por profissional habilitado, após análise das indicações e contraindicações.",
  },
  {
    number: "05",
    slug: "limpeza-de-pele",
    title: "Limpeza de pele",
    description:
      "Higienização profunda com extração e cuidados voltados ao equilíbrio da pele do rosto.",
  },
  {
    number: "06",
    slug: "peelings-superficiais",
    title: "Peelings superficiais",
    description:
      "Renovação da camada superficial da pele, indicada conforme avaliação de sensibilidade e objetivo.",
  },
  {
    number: "07",
    slug: "microagulhamento",
    title: "Microagulhamento",
    description:
      "Estímulo de bioestimulação cutânea por microagulhas, com protocolo individualizado.",
  },
  {
    number: "08",
    slug: "drenagem-linfatica",
    title: "Drenagem linfática",
    description:
      "Técnica manual voltada à sensação de leveza e bem-estar corporal, conforme avaliação prévia.",
  },
];

export const techFeatures: TechFeature[] = [
  { title: "Parâmetros individualizados", description: "Ajustados a cada atendimento" },
  { title: "Avaliação do fototipo", description: "Considerada antes de qualquer protocolo" },
  { title: "Atenção à sensibilidade", description: "Conforto durante todo o procedimento" },
  { title: "Protocolos faciais e corporais", description: "Definidos conforme objetivo" },
  { title: "Acompanhamento entre sessões", description: "Evolução observada de perto" },
  { title: "Análise de contraindicações", description: "Segurança em primeiro lugar" },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Primeiro contato",
    description: "Você entra em contato pelo WhatsApp e conhece um pouco mais sobre a clínica.",
  },
  {
    number: "02",
    title: "Avaliação individual",
    description: "Nossa equipe analisa objetivos, histórico e sensibilidades antes de qualquer indicação.",
  },
  {
    number: "03",
    title: "Definição do protocolo",
    description: "O plano de cuidado é construído de acordo com as necessidades identificadas na avaliação.",
  },
  {
    number: "04",
    title: "Atendimento e acompanhamento",
    description: "As sessões são realizadas com acompanhamento próximo em cada etapa do processo.",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: `${IMG}/clinica-fachada.png`,
    alt: "Fachada de entrada da Clínica Alva, com letreiro iluminado — imagem ilustrativa criada para este projeto fictício",
    caption: "Fachada",
  },
  {
    src: `${IMG}/clinica-recepcao.png`,
    alt: "Recepção da Clínica Alva, com sofá e balcão de atendimento — imagem ilustrativa criada para este projeto fictício",
    caption: "Recepção",
  },
  {
    src: `${IMG}/clinica-sala-atendimento.png`,
    alt: "Sala de atendimento da Clínica Alva, com maca e equipamento a laser — imagem ilustrativa criada para este projeto fictício",
    caption: "Sala de atendimento",
  },
  {
    src: `${IMG}/clinica-biosseguranca.png`,
    alt: "Bandeja com materiais descartáveis e itens de biossegurança da Clínica Alva — imagem ilustrativa criada para este projeto fictício",
    caption: "Biossegurança",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "A equipe explicou todas as etapas e respondeu minhas dúvidas antes do procedimento. O atendimento foi tranquilo e muito cuidadoso.",
    name: "Camila R.",
  },
  {
    quote:
      "Gostei da avaliação porque não tentaram me oferecer vários procedimentos. Recebi uma orientação coerente com aquilo que eu procurava.",
    name: "Renata M.",
  },
  {
    quote:
      "O espaço é organizado, confortável e o acompanhamento depois da sessão fez muita diferença para mim.",
    name: "Juliana A.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Preciso saber qual tratamento quero realizar?",
    answer:
      "Não. Durante a avaliação individual, nossa equipe ajuda a identificar as opções mais adequadas para o seu objetivo.",
  },
  {
    question: "A avaliação pode ocorrer no mesmo dia do procedimento?",
    answer:
      "Depende do tratamento e da disponibilidade de agenda. Em alguns casos é possível; em outros, recomendamos um retorno após a avaliação.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Varia conforme o tratamento e as características individuais. Esse número é definido junto com você durante a avaliação.",
  },
  {
    question: "Todos os tratamentos são indicados para qualquer pessoa?",
    answer:
      "Não. Cada procedimento tem indicações e contraindicações próprias, avaliadas individualmente antes de qualquer recomendação.",
  },
  {
    question: "Os resultados são garantidos?",
    answer:
      "Não trabalhamos com promessas de resultado. As respostas variam conforme características individuais, e isso é conversado com transparência na avaliação.",
  },
  {
    question: "Como devo me preparar?",
    answer:
      "As orientações de preparo variam conforme o procedimento e são passadas individualmente após a avaliação.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As formas de pagamento disponíveis podem ser confirmadas diretamente com nossa equipe pelo WhatsApp.",
  },
  {
    question: "Como faço para remarcar?",
    answer:
      "Basta entrar em contato pelo WhatsApp com antecedência para reorganizarmos o seu horário.",
  },
];
