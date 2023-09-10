export interface IItemResult {
  quantidade: number;
  valorReferencia: number;
  descricao: string;
  participacao: { codigo: number };
  codigo: number;
}

export interface IItemResponse {
  itens: {
    result: IItemResult[];
    pageCount: number;
  };
}
