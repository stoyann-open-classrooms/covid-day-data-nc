export class DailyData {
  constructor(
    date,
    confinement,
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
    this.date = date;
    this.confinement = confinement;
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
}
