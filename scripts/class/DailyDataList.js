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
}
