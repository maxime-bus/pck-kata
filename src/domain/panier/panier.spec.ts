import {ProduitAvecPrixTtc} from "../produit/produit-ttc";
import {TypeProduit} from "../produit/type-produit";
import {Panier} from "./panier";

describe(`Gestion du panier`, () => {

  it(`Un panier fraîchement créé est vide`, () => {
    expect(new Panier().nombreArticles()).toEqual(0);
  });

  it(`Je peux connaitre le prix total hors taxe du panier`, () => {
    const panier = new Panier()
      .ajouterProduit(new ProduitAvecPrixTtc("banane", 1.76, 1, TypeProduit.NOURRITURE, true))
      .ajouterProduit(new ProduitAvecPrixTtc("pomme", 1.2, 1, TypeProduit.NOURRITURE, false));

    expect(panier.prixTotalHt()).toEqual(2.96);
  });

  it(`Je peux connaitre le prix total ttc du panier`, () => {
    const panier = new Panier()
      .ajouterProduit(new ProduitAvecPrixTtc("banane", 1.76, 1, TypeProduit.NOURRITURE, true))
      .ajouterProduit(new ProduitAvecPrixTtc("pomme", 1.2, 1, TypeProduit.NOURRITURE, false));

    expect(panier.prixTotalTtc()).toEqual(3.06);
  });

  it(`Je peux connaitre le montant total de taxe appliquée à un panier`, () => {
    const panier = new Panier()
      .ajouterProduit(new ProduitAvecPrixTtc("banane", 1.76, 1, TypeProduit.NOURRITURE, true))
      .ajouterProduit(new ProduitAvecPrixTtc("pomme", 1.2, 1, TypeProduit.NOURRITURE, false));

    expect(panier.montantTotalTaxes()).toEqual(0.1);
  });
});
