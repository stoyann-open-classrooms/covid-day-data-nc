// csv to json

let csv2Json = require("convert-csv-to-json");
csv2Json.generateJsonFileFromCsv(
  "data/covid19-nc-cas-actifs_deces.csv",
  "datacovid19-nc-cas-actifs_decesJson.json"
);
