export default interface IReadingAttributes {
  measureUuid: string; // Identificador único da medição
  measureDatetime: Date; // Data e hora da medição
  measureType: 'WATER' | 'GAS'; // Tipo de medição
  hasConfirmed: boolean; // Indica se a medição foi confirmada
  imageUrl: string; // URL da imagem associada à medição
  measureValue: number;
  confirmedValue?: number;
  customerCode: string; // Código do cliente associado à medição
}
