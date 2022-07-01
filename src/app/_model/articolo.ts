import { Recensioni } from "./recensione";

export class Articolo {

  id?: number;
  nome?: String;
  costo?: number;
  recensione?: Recensioni = new Recensioni();

}
