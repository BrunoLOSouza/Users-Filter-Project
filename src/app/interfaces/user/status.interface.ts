export interface IStatus {
  online: boolean;
  verificado: boolean;
  assinaturaAtiva: boolean;
  ultimoAcesso: string; // ISO date string
}