import {Taxable} from "../taxe/taxe";
import {TypeProduit} from "./type-produit";

export class Produit implements Taxable {
  constructor(
    public readonly nom: string,
    public readonly prixHt: number,
    public readonly quantite: number,
    public readonly type: TypeProduit,
    public readonly estImporte: boolean,
  ) {
  }
}
