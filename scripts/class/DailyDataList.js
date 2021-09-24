export class DailyDataList {
  constructor(dataList) {
    this.dataList = dataList;
  }

  getTotalDeces() {
    let totalDeces = 0;
    this.dataList.forEach((element) => {
      totalDeces = totalDeces + element.deces;
    });
    console.log(` ${totalDeces} décès depuis le 6.09.2021`);
    return totalDeces;
  }

  getTotalCas() {
    let totalCas = 0;
    this.dataList.forEach((element) => {
      totalCas = totalCas + element.cas;
    });
    console.log(` ${totalCas} cas depuis le 6.09.2021`);
    return totalCas;
  }

  getDatasetCas() {
    const dataSetCase = [];
    this.dataList.forEach((el) => {
      dataSetCase.push(el.cas);
    });
    return dataSetCase;
  }

  getDatasetDeces() {
    const dataSetDeces = [];
    this.dataList.forEach((el) => {
      dataSetDeces.push(el.deces);
    });
    return dataSetDeces;
  }

  getDatasetDate() {
    const dataSetDate = [];
    this.dataList.forEach((el) => {
      dataSetDate.push(el.date);
    });
    return dataSetDate;
  }

  getDatasetHospitalisation() {
    const dataSetHospitalisation = [];
    this.dataList.forEach((el) => {
      dataSetHospitalisation.push(el.hospitalise);
    });
    return dataSetHospitalisation;
  }

  getDatasetReanimation() {
    const dataSetReanimation = [];
    this.dataList.forEach((el) => {
      dataSetReanimation.push(el.reanimation);
    });
    return dataSetReanimation;
  }

  getDatasetTotalDoseInject() {
    const dataSetTotalDoseInject = [];
    this.dataList.forEach((el) => {
      dataSetTotalDoseInject.push(
        el.dosesInjecteesDuJour.first +
          el.dosesInjecteesDuJour.second +
          el.dosesInjecteesDuJour.third
      );
    });
    return dataSetTotalDoseInject;
  }
}
