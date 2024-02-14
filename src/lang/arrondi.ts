export const arrondiSuperieur = (arrondi: number) =>
  (nombre: number) => troncature2Decimales(Math.ceil(nombre / arrondi) * arrondi);

export const troncature2Decimales = (valeurArrondie: number) => Math.trunc(valeurArrondie * 100) / 100;
