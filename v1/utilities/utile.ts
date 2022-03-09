function ConvertToNumber(arg?: string | number): number {
  const value = arg as unknown as number;
  return value ? value : 320;
}
type src = {
  original?: string
}
type RestP = {
  url?: string;
  id?: number;
  width?: number;
  photographer?: string;
  photographer_url?: string;
  photographer_id?: string;
  src?: src;
};

export type {RestP};
// test if it a string, number or undefined
export default ConvertToNumber;
