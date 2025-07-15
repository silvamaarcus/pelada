export const jogadoresMensalData = [
  {
    nome: "Marcus",
    status: "Ativo",
    telefone: "31997003074",
    ultimaMensalidade: "Julho 2025",
  },
  {
    nome: "Guilherme",
    status: "Ativo",
    telefone: "31997003074",
    ultimaMensalidade: "Julho 2025",
  },
  {
    nome: "Talu",
    status: "Desativado",
    telefone: "31997003074",
    ultimaMensalidade: "Junho 2025",
  },
  {
    nome: "Yuri",
    status: "Ativo",
    telefone: "31997003074",
    ultimaMensalidade: "Julho 2025",
  },
];

export const jogadoresAvulsoData = [
  {
    nome: "Vitão",
    status: "Pago",
    quemTrouxe: "Marcus",
  },
  {
    nome: "Rapha Conca",
    status: "Devendo",
    quemTrouxe: "Guilherme",
  },
  {
    nome: "Cunhado Talu",
    status: "Pago",
    quemTrouxe: "Talu",
  },
  {
    nome: "Geovane",
    status: "Pago",
    quemTrouxe: "Yuri",
  },
];

export const pagamentosRecentesData = [
  {
    nome: "João Silva",
    valor: "R$ 50,00",
    data: "10/07/2025",
    status: "Confirmado",
  },
  {
    nome: "Maria Santos",
    valor: "R$ 50,00",
    data: "09/07/2025",
    status: "Confirmado",
  },
  {
    nome: "Ana Oliveira",
    valor: "R$ 50,00",
    data: "08/07/2025",
    status: "Confirmado",
  },
  {
    nome: "Carlos Souza",
    valor: "R$ 50,00",
    data: "07/07/2025",
    status: "Confirmado",
  },
];

export const pagamentosPendentesData = [
  {
    nome: "Pedro Costa",
    valor: "R$ 50,00",
    diasAtraso: 15,
    meses: "Junho/2025",
  },
  {
    nome: "Roberto Lima",
    valor: "R$ 50,00",
    diasAtraso: 8,
    meses: "Julho/2025",
  },
];

export const historicoPagamentosData = [
  {
    nome: "João Silva",
    mesAno: "Julho/2025",
    valor: "R$ 50,00",
    dataPagamento: "10/07/2025",
    status: "Pago",
  },
  {
    nome: "Maria Santos",
    mesAno: "Julho/2025",
    valor: "R$ 50,00",
    dataPagamento: "09/07/2025",
    status: "Pago",
  },
  {
    nome: "Pedro Costa",
    mesAno: "Junho/2025",
    valor: "R$ 50,00",
    dataPagamento: "-",
    status: "Pendente",
  },
  {
    nome: "Ana Oliveira",
    mesAno: "Julho/2025",
    valor: "R$ 50,00",
    dataPagamento: "08/07/2025",
    status: "Pago",
  },
];

// Transações

export const historicoDespesasData = [
  {
    categoria: "Aluguel da Quadra",
    valor: "R$ 750,00",
    percentual: 50,
    tipo: "saida",
    cor: "bg-blue-500",
  },
  {
    categoria: "Material",
    valor: "R$ 150,00",
    percentual: 18.75,
    tipo: "saida",
  },
  {
    categoria: "Churrasco",
    valor: "R$ 100,00",
    percentual: 12.5,
    tipo: "saida",
  },
  {
    categoria: "Goleiro de App",
    valor: "R$ 80,00",
    percentual: 10,
    tipo: "saida",
  },
  {
    categoria: "Outros",
    valor: "R$ 70,00",
    percentual: 8.75,
  },
];

export const historicoEntradasData = [
  {
    categoria: "Peladeiro Avulso",
    valor: "R$ 750,00",
    percentual: 50,
    tipo: "entrada",
  },
  {
    categoria: "Peladeiro Avulso",
    valor: "R$ 150,00",
    percentual: 18.75,
    tipo: "entrada",
  },
  {
    categoria: "Pagamento Mensalista",
    valor: "R$ 80,00",
    percentual: 10,
    tipo: "entrada",
  },
];

export const despesasRecentesData = [
  {
    descricao: "Aluguel da Quadra",
    categoria: "Fixo",
    valor: "R$ 750,00",
    data: "01/07/2025",
  },
  {
    descricao: "Bolas de Futebol",
    categoria: "Material",
    valor: "R$ 80,00",
    data: "05/07/2025",
  },
  {
    descricao: "Carne",
    categoria: "Churrasco",
    valor: "R$ 30,00",
    data: "08/07/2025",
  },
  {
    descricao: "Produtos de limpeza",
    categoria: "Goleiro",
    valor: "R$ 25,00",
    data: "10/07/2025",
  },
];

export const historicoTransacoesData = [
  {
    descricao: "Aluguel da Quadra",
    categoria: "Entrada",
    valor: "R$ 750,00",
    dataPagamento: "01/07/2025",
  },
  {
    descricao: "Bolas de Futebol",
    categoria: "Saida",
    valor: "R$ 80,00",
    dataPagamento: "05/07/2025",
  },
  {
    descricao: "Água para os jogadores",
    categoria: "Entrada",
    valor: "R$ 30,00",
    dataPagamento: "08/07/2025",
  },
  {
    descricao: "Produtos de limpeza",
    categoria: "Saida",
    valor: "R$ 25,00",
    dataPagamento: "10/07/2025",
  },
];
