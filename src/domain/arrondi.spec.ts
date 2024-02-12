import {arrondiSuperieur} from "./arrondi";

describe(`Régles d'arrondi`, () => {

  const donnees = [
    {valeur: 0.99, arrondiAttendu: 1.00},
    {valeur: 1.00, arrondiAttendu: 1.00},
    {valeur: 1.01, arrondiAttendu: 1.05},
    {valeur: 1.02, arrondiAttendu: 1.05},
    {valeur: 1.06, arrondiAttendu: 1.1}, // déduction d'après l'énoncé
    {valeur: 1.94, arrondiAttendu: 1.95}, // déduction d'après l'énoncé
  ];

  it.each(donnees)(`Vérifie que $valeur s'arrondi à $arrondiAttendu`, (donnee) => {
      expect(arrondiSuperieur(0.05, donnee.valeur)).toEqual(donnee.arrondiAttendu);
  });
});
