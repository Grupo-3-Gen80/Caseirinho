export default interface Restaurante {
    id?: number | null
    razaoSocial: string;
    cpf: string;
    endereco: string;
    status?: string;
    horarioAbertura?: {
      hour: number;
      minute: number;
      second: number;
      nano: number;
    };
    horarioFechamento?: {
      hour: number;
      minute: number;
      second: number;
      nano: number;
    };
  }
  