import { IUser } from "../interfaces/user/user.interface";

export const UserList: IUser[] = [
  {
    nome: "Laura Mendes",
    email: "laura.mendes@example.com",
    senha: "m3nd3sL@ura2025",
    idade: 29,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    telefone: "11912345678",
    ativo: true,
    funcao: "Designer Gráfico",
    dataCadastro: "2023-06-14T10:32:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-08-20T14:45:00Z"
    }
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    senha: "C@rl0s_2024",
    idade: 42,
    endereco: {
      rua: "Av. Central",
      numero: 87,
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    telefone: "31998765432",
    ativo: false,
    funcao: "Gerente de Projetos",
    dataCadastro: "2021-11-03T08:15:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2024-12-01T09:12:00Z"
    }
  },
  {
    nome: "Fernanda Souza",
    email: "fernanda.souza@example.com",
    senha: "F3rn@ndaS123",
    idade: 35,
    endereco: {
      rua: "Rua do Sol",
      numero: 456,
      cidade: "Curitiba",
      estado: "PR",
      pais: "Brasil"
    },
    telefone: "41934567890",
    ativo: true,
    funcao: "Desenvolvedora Front-End",
    dataCadastro: "2022-09-25T14:00:00Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-08-26T09:00:00Z"
    }
  },
  {
    nome: "Rafael Lima",
    email: "rafael.lima@example.com",
    senha: "R4f@2025_Lima",
    idade: 27,
    endereco: {
      rua: "Travessa da Serra",
      numero: 321,
      cidade: "Porto Alegre",
      estado: "RS",
      pais: "Brasil"
    },
    telefone: "51987654321",
    ativo: false,
    funcao: "Analista de Dados",
    dataCadastro: "2020-05-10T11:20:00Z",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-07-14T17:30:00Z"
    }
  },
  {
    nome: "Juliana Castro",
    email: "juliana.castro@example.com",
    senha: "JuC@stro#2025",
    idade: 31,
    endereco: {
      rua: "Rua das Laranjeiras",
      numero: 789,
      cidade: "Recife",
      estado: "PE",
      pais: "Brasil"
    },
    telefone: "81976543210",
    ativo: true,
    funcao: "Especialista em Marketing",
    dataCadastro: "2024-01-19T16:50:00Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-08-25T21:10:00Z"
    }
  }
];
