import {arrondiSuperieur} from "../arrondi";
import {TypeProduit} from "../produit/type-produit";

export interface Taxable {
  type: TypeProduit,
  prix: number,
  estImporte: boolean
}

export function calculerPrixTtc(produitTaxable: Taxable) {
  const appliquerArrondi = arrondiSuperieur(0.05);

  let taxeImportation = 0;

  if (produitTaxable.estImporte) {
    taxeImportation = appliquerArrondi(produitTaxable.prix * 0.05);
  }

  if (produitTaxable.type === TypeProduit.LIVRE) {
    return produitTaxable.prix + appliquerArrondi(produitTaxable.prix * 0.1) + taxeImportation;
  }

  if (produitTaxable.type === TypeProduit.AUTRE) {
    return produitTaxable.prix + appliquerArrondi(produitTaxable.prix * 0.2) + taxeImportation;
  }

  return produitTaxable.prix + taxeImportation;
}
