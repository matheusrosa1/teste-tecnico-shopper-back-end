export default interface IReadingAttributes {
  
  measure_uuid: string; // Identificador único da medição
  measure_datetime: Date; // Data e hora da medição
  measure_type: 'WATER' | 'GAS'; // Tipo de medição
  has_confirmed: boolean; // Indica se a medição foi confirmada
  image_url: string; // URL da imagem associada à medição
  measure_value: number;
  confirmed_value?: number;
}
