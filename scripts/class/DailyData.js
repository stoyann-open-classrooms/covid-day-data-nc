export class DailyData {
  constructor(
    id,
    date,
    cas,
    hospitalise,
    reanimation,
    deces,
    guerison,
    hotel,
    statuVAccinalCasPositifs,
    dosesInjecteesDuJour,
    AvanceVaccinationPopVacinables
  ) {
    this.id = id;
    this.date = date;
    this.cas = cas;
    this.hospitalise = hospitalise;
    this.reanimation = reanimation;
    this.deces = deces;
    this.guerison = guerison;
    this.hotel = hotel;
    this.statuVAccinalCasPositifs = statuVAccinalCasPositifs;
    this.dosesInjecteesDuJour = dosesInjecteesDuJour;
    this.AvanceVaccinationPopVacinables = AvanceVaccinationPopVacinables;
  }

  getTotalInjectDay() {
    let totalDoses =
      this.dosesInjecteesDuJour.first +
      this.dosesInjecteesDuJour.second +
      this.dosesInjecteesDuJour.third;
    console.log(this.dosesInjecteesDuJour.first);
    return totalDoses;
  }
}

// for (let recipe of this.recipes) {
//   for (let i = 0; i < recipe.ingredients.length; i++) {
//     AllIngredients.add(capitalizeFirstChar(recipe.ingredients[i].ingredient));
//   }
// }
