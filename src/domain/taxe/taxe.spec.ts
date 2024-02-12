import {calculerPrixTtc} from "./taxe";
import {TypeProduit} from "../produit/type-produit";

describe(`Règles de taxation`, () => {

  describe(`Lorsque les produits ne sont pas importés`, () => {

    it(`Aucune taxe n'est appliquée sur les produits de première nécessité`, () => {
      expect(calculerPrixTtc({type: TypeProduit.NOURRITURE, prix: 10, estImporte: false})).toEqual(10);
      expect(calculerPrixTtc({type: TypeProduit.MEDICAMENT, prix: 10, estImporte: false})).toEqual(10);
    });

    it(`Une taxe de 10% est appliquée sur les livres`, () => {
      expect(calculerPrixTtc({type: TypeProduit.LIVRE, prix: 19.99, estImporte: false})).toEqual(21.99);
    });

    it(`Une taxe de 20% est appliquée sur les autres produits`, () => {
      expect(calculerPrixTtc({type: TypeProduit.AUTRE, prix: 19.99, estImporte: false})).toEqual(23.99);
    });

  });

  describe(`Lorsque les produits sont importés`, () => {

    it(`Une taxe additionnelle de 5% est appliquée aux produits de première nécessité`, () => {
      expect(calculerPrixTtc({type: TypeProduit.NOURRITURE, prix: 10, estImporte: true})).toEqual(10.5);
      expect(calculerPrixTtc({type: TypeProduit.MEDICAMENT, prix: 10, estImporte: true})).toEqual(10.5);
    });

    it(`Une taxe additionnelle de 5% est appliquée sur les livres, en plus de la taxe de 10% `, () => {
      expect(calculerPrixTtc({type: TypeProduit.LIVRE, prix: 19.99, estImporte: true})).toEqual(22.99);
    });

    it(`Une taxe additionnelle de 5% est appliquée sur les autres produits, en plus de la taxe de 20% `, () => {
      expect(calculerPrixTtc({type: TypeProduit.AUTRE, prix: 19.99, estImporte: true})).toEqual(24.99);
    });
  });

});
