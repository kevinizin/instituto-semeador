/* ==========================================================================
   Instituto Semeador — catálogo de conteúdo
   Todos os dados abaixo vêm dos materiais oficiais do Instituto.
   ========================================================================== */

const INSTITUTO = {
  nome: 'Instituto Semeador',
  tipo: 'Organização da Sociedade Civil',
  bairro: 'Compensa 1',
  cidade: 'Manaus',
  uf: 'AM',
  endereco: 'Rua Joraci Camargo, nº 100 — Compensa 1, Manaus/AM',
  enderecoCurto: 'Rua Joraci Camargo, nº 100',
  telefone: '(92) 99192-6235',
  whatsapp: '5592991926235',
  instagram: 'https://www.instagram.com/instituto__semeador',
  instagramUser: '@instituto__semeador',
  mapa: 'https://maps.app.goo.gl/MjTrsjYmSybkjswz5',
  presidente: 'Ieda Veras',
  vice: 'Paulo Tomate',
  pilares: [
    { icone: 'coracao', titulo: 'Acolhimento que inspira', texto: 'Cada pessoa que entra é recebida pelo nome, ouvida e encaminhada.' },
    { icone: 'livro', titulo: 'Ensino que transforma', texto: 'Da alfabetização de adultos à qualificação profissional, sempre gratuito.' },
    { icone: 'estrela', titulo: 'Oportunidades que geram futuro', texto: 'Certificado na mão, currículo pronto e uma porta aberta no mercado.' },
    { icone: 'maos', titulo: 'Juntos fazemos mais', texto: 'Parcerias com CETAM, SEJUSC e Mesa Brasil ampliam o alcance de tudo.' }
  ]
};

/* Mensagens prontas de WhatsApp por contexto */
const WPP_BASE = 'https://wa.me/' + INSTITUTO.whatsapp + '?text=';
const wpp = (msg) => WPP_BASE + encodeURIComponent(msg);

/* --------------------------------------------------------------------------
   PROGRAMAS
   categoria: curso | servico | acao
   galerias: pastas de fotos, cada uma com total de imagens e a foto de capa
   -------------------------------------------------------------------------- */
const PROGRAMAS = [

  /* ===================== CURSOS E CAPACITAÇÕES ===================== */
  {
    slug: 'eja',
    categoria: 'curso',
    titulo: 'Programa EJA',
    subtitulo: 'Educação de Jovens e Adultos',
    resumo: 'Volte a estudar e conclua o Ensino Fundamental ou o Ensino Médio perto de casa, sem pagar nada.',
    situacao: 'Matrículas abertas',
    lema: 'Dê o próximo passo rumo ao seu futuro!',
    descricao: [
      'O Programa EJA do Instituto Semeador é a porta de entrada para quem precisou parar de estudar e quer retomar a caminhada. As aulas acontecem na própria sede, na Compensa 1, com turmas de adultos que dividem a sala com vizinhos, colegas de trabalho e familiares.',
      'Ao longo do ciclo os alunos assistem às aulas, fazem as provas presenciais no Instituto e concluem a etapa com a cerimônia de formatura — beca, certificado na mão e a família na plateia.'
    ],
    destaques: [
      { rotulo: 'Níveis', valor: 'Fundamental 1, Fundamental 2 e Ensino Médio' },
      { rotulo: 'Inscrição', valor: 'Presencial, na sede do Instituto' },
      { rotulo: 'Documentos', valor: 'RG, CPF e comprovante de residência (xerox)' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Ensino Fundamental 1',
      'Ensino Fundamental 2',
      'Ensino Médio',
      'Provas aplicadas na sede, com acompanhamento da equipe',
      'Cerimônia de formatura com certificado'
    ],
    cartazes: ['eja', 'eja-matricula'],
    galerias: [
      { slug: 'prova-eja', titulo: 'Dia de prova', total: 14, capa: 5, texto: 'Sala cheia, prova na carteira e a equipe acompanhando de perto cada turma.' },
      { slug: 'formatura-eja', titulo: 'Formatura', total: 11, capa: 4, texto: 'A noite em que o esforço vira certificado — beca, foto com a família e diretoria em peso.' }
    ],
    cta: 'Quero me matricular no EJA'
  },
  {
    slug: 'informatica',
    categoria: 'curso',
    titulo: 'Informática Básica e Avançada',
    subtitulo: 'Realização Instituto Semeador · Parceria CETAM',
    resumo: 'Do primeiro contato com o computador até as ferramentas que o mercado exige — em turmas de manhã e de tarde.',
    situacao: 'Matrículas abertas',
    descricao: [
      'O laboratório de informática do Instituto recebe turmas de todas as idades: gente que está ligando um computador pela primeira vez e gente que já quer avançar em ferramentas de escritório.',
      'São quatro horários por dia entre as turmas básica e avançada, com instrutor acompanhando aluno por aluno na bancada.'
    ],
    destaques: [
      { rotulo: 'Informática Básica', valor: '8h às 10h · 13h às 15h' },
      { rotulo: 'Informática Avançada', valor: '10h às 12h · 15h às 17h' },
      { rotulo: 'Documentos', valor: 'RG, CPF e comprovante de residência (xerox)' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Turmas para iniciantes e para nível avançado',
      'Laboratório com computadores na sede',
      'Instrutor acompanhando cada aluno',
      'Quatro horários por dia para escolher'
    ],
    cartazes: ['informatica'],
    galerias: [
      { slug: 'informatica', titulo: 'Aulas no laboratório', total: 7, capa: 4, texto: 'Turmas em aula no laboratório da sede, com apoio do instrutor bancada a bancada.' }
    ],
    cta: 'Quero me matricular em Informática'
  },
  {
    slug: 'trancista',
    categoria: 'curso',
    titulo: 'Curso de Trancista',
    subtitulo: 'Qualificação profissional em tranças',
    resumo: 'Uma profissão inteira aprendida na prática, com modelo na cadeira e material na mão.',
    situacao: 'Inscrições abertas',
    lema: 'Transformando vidas com conhecimento e oportunidades!',
    descricao: [
      'O curso de trancista forma profissionais para uma das áreas que mais empregam e que permite trabalhar por conta própria desde o primeiro dia. As aulas são práticas: cada aluna atende uma modelo real, acompanhada pela instrutora.',
      'É uma capacitação curta, intensiva e gratuita — pensada para quem precisa de renda rápida sem abrir mão de qualidade técnica.'
    ],
    destaques: [
      { rotulo: 'Idade mínima', valor: '16 anos' },
      { rotulo: 'Período', valor: 'Junho a Julho' },
      { rotulo: 'Horário', valor: '14h às 17h' },
      { rotulo: 'Documentos', valor: 'RG, CPF e comprovante de residência' }
    ],
    itens: [
      'Aulas 100% práticas, com modelo na cadeira',
      'Técnicas de trança e finalização',
      'Turmas reduzidas, com acompanhamento individual',
      'Inscrições presenciais na sede'
    ],
    cartazes: ['trancista'],
    galerias: [
      { slug: 'trancista', titulo: 'Aulas práticas', total: 3, capa: 2, texto: 'Prática supervisionada: cada aluna atende uma modelo do começo ao fim.' }
    ],
    cta: 'Quero me inscrever no Curso de Trancista'
  },
  {
    slug: 'assistente-administrativo',
    categoria: 'curso',
    titulo: 'Assistente Administrativo',
    subtitulo: 'Realização Instituto Semeador · Parceria CETAM',
    resumo: 'Qualificação noturna para quem trabalha durante o dia e quer entrar no mercado administrativo.',
    situacao: 'Inscrições abertas',
    descricao: [
      'Em parceria com o CETAM, o Instituto oferece a formação de Assistente Administrativo em horário noturno, pensada para quem trabalha durante o dia.',
      'O curso prepara para as rotinas de escritório que as empresas de Manaus mais contratam.'
    ],
    destaques: [
      { rotulo: 'Idade mínima', valor: '18 anos' },
      { rotulo: 'Período', valor: 'Abril a Maio' },
      { rotulo: 'Horário', valor: '18h às 21h' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Rotinas administrativas e de escritório',
      'Turma noturna, para quem trabalha de dia',
      'Certificação com parceria CETAM',
      'Informações pelo WhatsApp ou na recepção'
    ],
    cartazes: ['assistente-administrativo'],
    galerias: [],
    cta: 'Quero informações sobre o curso de Assistente Administrativo'
  },

  /* ===================== SERVIÇOS GRATUITOS ===================== */
  {
    slug: 'psicologia',
    categoria: 'servico',
    titulo: 'Psicologia',
    subtitulo: 'Conceição Pimentel · Psicóloga clínica e organizacional · CRP 20/8675',
    resumo: 'Atendimento psicológico individual com abordagem humanista, mais palestras e rodas de conversa sobre saúde mental.',
    situacao: 'Agendamento na recepção',
    lema: 'Acolher · Apoiar · Orientar · Intervir',
    descricao: [
      'O serviço de psicologia do Instituto é conduzido pela psicóloga Conceição Pimentel (CRP 20/8675), com atuação clínica e institucional. O atendimento individual segue a abordagem humanista, num espaço reservado dentro da sede.',
      'Além dos atendimentos, a equipe leva o tema para a comunidade em palestras, rodas de conversa e encontros motivacionais.'
    ],
    destaques: [
      { rotulo: 'Profissional', valor: 'Conceição Pimentel — CRP 20/8675' },
      { rotulo: 'Abordagem', valor: 'Humanista' },
      { rotulo: 'Agendamento', valor: 'Diretamente na recepção' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Atendimento psicológico individual (abordagem humanista)',
      'Escuta e orientação sobre tratamento clínico de saúde',
      'Palestras e rodas de conversa sobre saúde mental',
      'Palestras motivacionais'
    ],
    cartazes: ['psicologia'],
    galerias: [
      { slug: 'psicologia', titulo: 'Atendimentos', total: 5, capa: 2, texto: 'Sala de atendimento na sede, com escuta individual e acolhimento.' }
    ],
    cta: 'Quero agendar um atendimento psicológico'
  },
  {
    slug: 'fisioterapia',
    categoria: 'servico',
    titulo: 'Fisioterapia',
    subtitulo: 'Atendimento gratuito na sede',
    resumo: 'Sessões individuais de reabilitação e movimento para idosos e adultos da comunidade.',
    situacao: 'Agendamento na recepção',
    descricao: [
      'A sala de fisioterapia atende moradores que não teriam como pagar por sessões particulares. Cada atendimento é individual e conduzido por profissional, com exercícios adaptados à condição da pessoa.',
      'Bola suíça, faixas elásticas, treino de equilíbrio e coordenação fazem parte da rotina — o objetivo é devolver autonomia no dia a dia.'
    ],
    destaques: [
      { rotulo: 'Público', valor: 'Idosos e adultos da comunidade' },
      { rotulo: 'Formato', valor: 'Sessões individuais acompanhadas' },
      { rotulo: 'Agendamento', valor: 'Diretamente na recepção' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Exercícios funcionais e de fortalecimento',
      'Treino de equilíbrio e coordenação',
      'Trabalho com bola suíça e faixas elásticas',
      'Acompanhamento individual em cada sessão'
    ],
    cartazes: [],
    galerias: [
      { slug: 'fisioterapia', titulo: 'Sessões', total: 4, capa: 1, texto: 'Atendimento individual na sala de fisioterapia da sede.' }
    ],
    cta: 'Quero agendar um atendimento de fisioterapia'
  },
  {
    slug: 'neuropsicopedagogia',
    categoria: 'servico',
    titulo: 'Neuropsicopedagogia',
    subtitulo: 'Atendimento com a neuropsicopedagoga',
    resumo: 'Acompanhamento de aprendizagem para crianças, adolescentes e adultos, com atividades práticas e materiais concretos.',
    situacao: 'Agendamento na recepção',
    descricao: [
      'O atendimento neuropsicopedagógico trabalha as dificuldades de aprendizagem com atividades lúdicas e materiais concretos — tinta, papelão, palitos, jogos e desafios feitos sob medida para cada pessoa.',
      'Atende crianças, adolescentes e adultos, sempre em sessão individual e num ritmo respeitoso com cada história.'
    ],
    destaques: [
      { rotulo: 'Público', valor: 'Crianças, adolescentes e adultos' },
      { rotulo: 'Método', valor: 'Atividades lúdicas e materiais concretos' },
      { rotulo: 'Formato', valor: 'Sessões individuais' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Avaliação e acompanhamento de aprendizagem',
      'Atividades práticas e jogos pedagógicos',
      'Sessões individuais em sala reservada',
      'Orientação às famílias'
    ],
    cartazes: [],
    galerias: [
      { slug: 'neuropsicopedagogia', titulo: 'Sessões', total: 5, capa: 1, texto: 'Sessões com atividades manuais, jogos e materiais concretos.' }
    ],
    cta: 'Quero agendar um atendimento neuropsicopedagógico'
  },
  {
    slug: 'servico-social',
    categoria: 'servico',
    titulo: 'Serviço Social',
    subtitulo: 'Acolhimento, orientação e encaminhamento',
    resumo: 'A primeira porta de quem chega: escuta, orientação sobre direitos e encaminhamento para os serviços certos.',
    situacao: 'Atendimento na sede',
    descricao: [
      'O Serviço Social é o ponto de partida de boa parte das famílias atendidas. É ali que a pessoa é ouvida, tem sua situação registrada e recebe orientação sobre benefícios, documentação e caminhos disponíveis.',
      'A equipe também organiza mutirões e ações comunitárias — dos atendimentos de rotina aos dias de beleza e cuidado dentro da própria sede.'
    ],
    destaques: [
      { rotulo: 'Atendimento', valor: 'Individual, na sede' },
      { rotulo: 'Foco', valor: 'Orientação, cadastro e encaminhamentos' },
      { rotulo: 'Público', valor: 'Famílias de toda Manaus' },
      { rotulo: 'Investimento', valor: 'Gratuito' }
    ],
    itens: [
      'Escuta e acolhimento inicial',
      'Orientação sobre direitos e benefícios',
      'Cadastro e encaminhamento para os programas do Instituto',
      'Mutirões e ações comunitárias'
    ],
    cartazes: [],
    galerias: [
      { slug: 'servico-social', titulo: 'Atendimentos e mutirões', total: 10, capa: 1, texto: 'Atendimento individual na sala do Serviço Social e ações realizadas com a comunidade.' }
    ],
    cta: 'Quero falar com o Serviço Social'
  },

  /* ===================== PROJETOS E AÇÕES ===================== */
  {
    slug: 'bem-viver',
    categoria: 'acao',
    titulo: 'Grupo Bem Viver & EnvelheSER 60+',
    subtitulo: 'Projeto com a SEJUSC',
    resumo: 'O grupo de idosos do Instituto: movimento, dança e convivência toda semana.',
    situacao: 'Projeto em andamento',
    lema: 'Mais vida. Mais movimento. Mais bem-estar!',
    descricao: [
      'O Grupo de Idosos Bem Viver Semeador reúne dezenas de participantes no salão do Instituto para atividades de movimento, dança e convivência. É encontro de saúde e também de amizade.',
      'O grupo foi convidado para a aula inaugural do Projeto EnvelheSER 60+, da SEJUSC, marcada para 02/07/2026, quinta-feira, às 8h, na sede do Instituto.'
    ],
    destaques: [
      { rotulo: 'Público', valor: 'Pessoas 60+' },
      { rotulo: 'Parceria', valor: 'SEJUSC — Projeto EnvelheSER 60+' },
      { rotulo: 'Aula inaugural', valor: '02/07/2026, quinta-feira, às 8h' },
      { rotulo: 'Local', valor: 'Sede do Instituto, Compensa 1' }
    ],
    itens: [
      'Encontros de movimento e dança',
      'Atividades de convivência e bem-estar',
      'Aula inaugural do Projeto EnvelheSER 60+ (SEJUSC)',
      'Aberto a idosos da comunidade'
    ],
    cartazes: ['envelheser'],
    galerias: [
      { slug: 'bem-viver', titulo: 'Encontros do grupo', total: 4, capa: 2, texto: 'O salão do Instituto tomado pelo grupo em atividade.' }
    ],
    cta: 'Quero participar do Grupo Bem Viver'
  },
  {
    slug: 'mesa-brasil',
    categoria: 'acao',
    titulo: 'Mesa Brasil',
    subtitulo: 'Distribuição de alimentos',
    resumo: 'Alimento que sobraria no comércio chega, ainda bom, à mesa das famílias da Compensa.',
    descricao: [
      'Pelo programa Mesa Brasil, o Instituto recebe e distribui alimentos às famílias cadastradas. A equipe separa, higieniza e monta as sacolas ali mesmo, na sede.',
      'Frutas, verduras e outros itens são entregues diretamente aos moradores, sem fila na rua e sem constrangimento.'
    ],
    destaques: [
      { rotulo: 'O que é', valor: 'Distribuição de alimentos a famílias' },
      { rotulo: 'Onde', valor: 'Sede do Instituto, Compensa 1' },
      { rotulo: 'Como participar', valor: 'Cadastro pelo Serviço Social' }
    ],
    itens: [
      'Recebimento e separação dos alimentos',
      'Montagem das sacolas pela equipe',
      'Entrega direta às famílias cadastradas',
      'Cadastro feito no Serviço Social'
    ],
    cartazes: [],
    galerias: [
      { slug: 'mesa-brasil', titulo: 'Dia de distribuição', total: 8, capa: 2, texto: 'Da separação das frutas à entrega em mãos, na própria sede.' }
    ],
    cta: 'Quero saber como participar do Mesa Brasil'
  },
  {
    slug: 'acao-terra-preta',
    categoria: 'acao',
    titulo: 'Ação Social no Ramal Terra Preta',
    subtitulo: 'Levando o Instituto para fora da cidade',
    resumo: 'A equipe atravessou o ramal para entregar kits às famílias ribeirinhas e rurais.',
    descricao: [
      'Nem toda comunidade consegue chegar até a Compensa. Por isso o Instituto vai até ela: no Ramal Terra Preta, a equipe entregou kits e mantimentos casa a casa, família por família.',
      'Cada entrega terminou do mesmo jeito — aperto de mão, foto e um convite para que aquela família também procure os serviços do Instituto.'
    ],
    destaques: [
      { rotulo: 'Onde', valor: 'Ramal Terra Preta' },
      { rotulo: 'O que foi feito', valor: 'Entrega de kits e mantimentos' },
      { rotulo: 'Alcance', valor: 'Famílias de comunidade rural' }
    ],
    itens: [
      'Entrega de kits às famílias do ramal',
      'Atendimento fora da sede',
      'Aproximação com comunidades rurais',
      'Ação realizada pela equipe e voluntários'
    ],
    cartazes: [],
    galerias: [
      { slug: 'acao-terra-preta', titulo: 'A ação', total: 6, capa: 2, texto: 'Entrega dos kits e o registro com cada família atendida.' }
    ],
    cta: 'Quero apoiar as ações sociais'
  },
  {
    slug: 'janeiro-branco',
    categoria: 'acao',
    titulo: 'Janeiro Branco',
    subtitulo: 'Palestra de saúde mental para a comunidade',
    resumo: 'O salão lotado para falar do que quase ninguém fala: saúde mental.',
    descricao: [
      'Na campanha Janeiro Branco, o Instituto reuniu a comunidade no salão para uma palestra aberta sobre saúde mental, conduzida pela equipe de psicologia.',
      'Foi tarde de escuta, informação e conversa franca — com moradores de todas as idades sentados lado a lado.'
    ],
    destaques: [
      { rotulo: 'Campanha', valor: 'Janeiro Branco — saúde mental' },
      { rotulo: 'Formato', valor: 'Palestra aberta à comunidade' },
      { rotulo: 'Onde', valor: 'Salão do Instituto, Compensa 1' }
    ],
    itens: [
      'Palestra conduzida pela equipe de psicologia',
      'Aberta a toda a comunidade',
      'Espaço para perguntas e conversa',
      'Encaminhamento para atendimento individual'
    ],
    cartazes: [],
    galerias: [
      { slug: 'janeiro-branco', titulo: 'A palestra', total: 7, capa: 4, texto: 'Salão cheio, palestra aberta e público de todas as idades.' }
    ],
    cta: 'Quero saber das próximas palestras'
  },
  {
    slug: 'dia-das-criancas',
    categoria: 'acao',
    titulo: 'Dia das Crianças',
    subtitulo: 'A rua inteira vira festa',
    resumo: 'Brinquedos infláveis, touro mecânico, cama elástica e presente na mão de cada criança.',
    descricao: [
      'No Dia das Crianças o Instituto fecha a rua e monta uma festa de verdade para a comunidade: infláveis, touro mecânico, cama elástica, música e muita criança correndo.',
      'A tarde termina com a entrega dos presentes, um a um, dentro da sede — e com a foto que fica de lembrança para a família.'
    ],
    destaques: [
      { rotulo: 'Quando', valor: 'Outubro, no Dia das Crianças' },
      { rotulo: 'Onde', valor: 'Na rua, em frente à sede' },
      { rotulo: 'O que tem', valor: 'Brinquedos, atrações e entrega de presentes' }
    ],
    itens: [
      'Brinquedos infláveis e cama elástica',
      'Touro mecânico e atrações na rua',
      'Entrega de presentes às crianças',
      'Ação aberta a toda a comunidade'
    ],
    cartazes: [],
    galerias: [
      { slug: 'dia-das-criancas', titulo: 'A festa', total: 12, capa: 1, texto: 'Da fachada decorada à rua cheia: o dia inteiro registrado.' }
    ],
    cta: 'Quero apoiar as ações para crianças'
  },
  {
    slug: 'dia-das-maes',
    categoria: 'acao',
    titulo: 'Dia das Mães',
    subtitulo: 'A maior celebração do ano',
    resumo: 'Palco montado na rua, som, atrações e a comunidade inteira para homenagear as mães da Compensa.',
    descricao: [
      'A celebração do Dia das Mães é a maior festa do calendário do Instituto: palco montado na rua, som, atrações e a comunidade lotando o quarteirão do fim da tarde até a noite.',
      'É a ação que mostra o tamanho do vínculo entre o Instituto e o bairro — milhares de moradores no mesmo lugar, pelo mesmo motivo.'
    ],
    destaques: [
      { rotulo: 'Quando', valor: 'Maio, no Dia das Mães' },
      { rotulo: 'Onde', valor: 'Na rua, em frente à sede' },
      { rotulo: 'O que tem', valor: 'Palco, atrações e homenagens' }
    ],
    itens: [
      'Palco e programação na rua',
      'Homenagens às mães da comunidade',
      'Participação aberta a todos',
      'Organização do Instituto e voluntários'
    ],
    cartazes: [],
    galerias: [
      { slug: 'dia-das-maes', titulo: 'A celebração', total: 6, capa: 1, texto: 'O quarteirão tomado pela comunidade, do fim da tarde até a noite.' }
    ],
    cta: 'Quero apoiar as ações do Instituto'
  }
];

const CATEGORIAS = {
  curso: {
    slug: 'cursos',
    nome: 'Cursos e capacitações',
    singular: 'Curso',
    chamada: 'Formação gratuita que cabe na sua rotina',
    texto: 'Cursos livres e programas de escolaridade, todos gratuitos, realizados na sede do Instituto — alguns em parceria com o CETAM.'
  },
  servico: {
    slug: 'servicos',
    nome: 'Serviços gratuitos',
    singular: 'Serviço',
    chamada: 'Atendimento profissional sem custo',
    texto: 'Psicologia, fisioterapia, neuropsicopedagogia e serviço social: profissionais atendendo a comunidade dentro da sede, de graça.'
  },
  acao: {
    slug: 'acoes',
    nome: 'Projetos e ações',
    singular: 'Ação',
    chamada: 'O Instituto na rua, junto da comunidade',
    texto: 'Distribuição de alimentos, ações em comunidades rurais, campanhas de saúde mental e as grandes festas do bairro.'
  }
};

/* Mosaico do hero — capas mais representativas */
const HERO_FOTOS = [
  { src: 'formatura-eja/t04.jpg', legenda: 'Formatura do EJA' },
  { src: 'dia-das-criancas/t01.jpg', legenda: 'Dia das Crianças' },
  { src: 'informatica/t03.jpg', legenda: 'Curso de Informática' },
  { src: 'mesa-brasil/t02.jpg', legenda: 'Mesa Brasil' }
];
