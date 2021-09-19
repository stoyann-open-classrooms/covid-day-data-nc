import { dailyData } from "./DailyData.js";
import { dailyDataList } from "./DailyDataList.js";
export class DataFetcher {
  constructor(data) {
    this.data = data;
  }

  getDataList() {
    const dataList = [];

    for (let dayli of this.data) {
      dataList.push(
        new dailyData(
          dailyData.id,
          dailyData.date,
          dailyData.cas,
          dailyData.guerison,
          dailyData.deces,
          dailyData.hospitalise,
          dailyData.doseInject
        )
      );
    }

    return new dailyDataList(dataList);
  }
}
