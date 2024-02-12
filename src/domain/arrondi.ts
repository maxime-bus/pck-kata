export const arrondiSuperieur = (arrondi: number) => (nombre: number) => {
  const valeurArrondie = Math.ceil(nombre / arrondi) * arrondi;
  const valeurArrondie2decimales = Math.trunc(valeurArrondie * 100) / 100;

  return valeurArrondie2decimales;
}

