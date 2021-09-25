export class DailyDataList {
  constructor(dataList) {
    this.dataList = dataList;
  }

  getTotalDeces() {
    let totalDeces = 0;
    this.dataList.forEach((element) => {
      totalDeces = totalDeces + element.deces;
    });
    return totalDeces;
  }

  getTodayCas() {
    let today = this.dataList[this.dataList.length - 1].cas;
    let yesterday = this.dataList[this.dataList.length - 2].cas;
    let nbDeCasToday = today - yesterday;
    return nbDeCasToday;
  }

  getAllDate() {
    let allDay = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allDay.push(el.date);
      }
    });
    return allDay;
  }
  getAllCasByDate() {
    let allCas = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allCas.push(el.cas);
      }
    });
    return allCas;
  }

  getAllDecesByDate() {
    let allDeces = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allDeces.push(el.deces);
      }
    });
    return allDeces;
  }
  getAllHospitalisationsByDate() {
    let allHospitalisation = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allHospitalisation.push(el.hospitalise);
      }
    });
    return allHospitalisation;
  }
  getAllReanimationsByDate() {
    let allReanimation = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allReanimation.push(el.reanimation);
      }
    });
    return allReanimation;
  }
  getAllguerisonByDate() {
    let allguerison = [];
    this.dataList.forEach((el) => {
      if (el.cas >= 139) {
        allguerison.push(el.guerison);
      }
    });
    return allguerison;
  }
}
