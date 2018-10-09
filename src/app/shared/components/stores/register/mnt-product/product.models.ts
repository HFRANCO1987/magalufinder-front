export interface Product {

  code:string;
  description:string;
  value:number;
  stores:Store[] = [];

}
