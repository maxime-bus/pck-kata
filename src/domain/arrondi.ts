export function arrondiSuperieur(arrondi: number, nombre: number): number {
  const valeurArrondie = Math.ceil(nombre / arrondi) * arrondi;
  const valeurArrondie2decimales = Math.trunc(valeurArrondie * 100) / 100;

  return valeurArrondie2decimales;
}
