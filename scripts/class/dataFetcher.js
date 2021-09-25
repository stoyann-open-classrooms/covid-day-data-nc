import { DailyData } from "./DailyData.js";
import { DailyDataList } from "./DailyDataList.js";
export class DataFetcher {
  constructor(data) {
    this.data = data;
  }

  getDataList() {
    const dataList = [];

    for (let dayli of this.data) {
      dataList.push(
        new DailyData(
          dayli.date,
          dayli.confinement,
          dayli.cas,
          dayli.hospitalise,
          dayli.reanimation,
          dayli.deces,
          dayli.guerison,
          dayli.hotel,
          dayli.statuVAccinalCasPositifs,
          dayli.dosesInjecteesDuJour,
          dayli.AvanceVaccinationPopVacinables
        )
      );
    }

    return new DailyDataList(dataList);
  }
}
