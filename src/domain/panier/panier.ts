import {ProduitAvecPrixTtc} from "../produit/produit-ttc";
import {troncature2Decimales} from "../../lang/arrondi";

export class Panier {
  constructor(
    public readonly produits: Array<ProduitAvecPrixTtc> = []
  ) {
  }

  nombreArticles = () => this.produits.length;

  ajouterProduit = (produitAvecPrixTtc: ProduitAvecPrixTtc): Panier =>
    new Panier(this.produits.concat(produitAvecPrixTtc));

  prixTotalHt = () => this.produits.map(p => p.prixHt).reduce((sum, prixHt) => sum + prixHt, 0);

  prixTotalTtc = () => this.produits.map(p => p.prixTtc).reduce((sum, prixTtc) => sum + prixTtc, 0);

  montantTotalTaxes = () => troncature2Decimales(this.prixTotalTtc() - this.prixTotalHt());
}
