import {Produit} from "./produit";
import {TypeProduit} from "./type-produit";
import {calculerPrixTtc} from "../taxe/taxe";

export class ProduitAvecPrixTtc extends Produit {
  public readonly prixTtc;

  constructor(
    nom: string,
    prixHt: number,
    quantite: number,
    type: TypeProduit,
    estImporte: boolean,
  ) {
    super(nom, prixHt, quantite, type, estImporte);

    this.prixTtc = calculerPrixTtc(this);
  }
}
