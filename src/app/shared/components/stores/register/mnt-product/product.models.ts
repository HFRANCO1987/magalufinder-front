import { Store } from '../../store/store.models';

export class Product {

  public code: string;
  public description: string;
  public value: string;
  public stores: Store[] = [];

  constructor(){}

}


