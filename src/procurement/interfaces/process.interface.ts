export interface IProcessResult {
  codigoLicitacao: number;
  identificacao: string;
  numero: string;
  resumo: string;
  codigoSituacaoEdital: number;
  status: { codigo: number };
  dataHoraInicioLances: Date;
}

export interface IProcessResponse {
  result: IProcessResult[];
  pageCount: number;
}
