import {arrondiSuperieur} from "../arrondi";
import {TypeProduit} from "../produit/type-produit";

export interface Taxable {
  type: TypeProduit,
  prixHt: number,
  estImporte: boolean
}

export function calculerPrixTtc(produitTaxable: Taxable) {
  const appliquerArrondi = arrondiSuperieur(0.05);

  let taxeImportation = 0;

  if (produitTaxable.estImporte) {
    taxeImportation = appliquerArrondi(produitTaxable.prixHt * 0.05);
  }

  if (produitTaxable.type === TypeProduit.LIVRE) {
    return produitTaxable.prixHt + appliquerArrondi(produitTaxable.prixHt * 0.1) + taxeImportation;
  }

  if (produitTaxable.type === TypeProduit.AUTRE) {
    return produitTaxable.prixHt + appliquerArrondi(produitTaxable.prixHt * 0.2) + taxeImportation;
  }

  return produitTaxable.prixHt + taxeImportation;
}
