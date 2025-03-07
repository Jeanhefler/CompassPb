import { createMovie } from "../../service/movieService.js";
import { testConfig } from "../../support/config/environment.js";
import { BaseChecks } from "../../support/base/checks.js";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "movieEndurance.html": htmlReport(data),
    };
}
let check = new BaseChecks()
export const options = testConfig.endurance

export default function(){
    const res = createMovie();
    check.checkStatusCode201(res)
    sleep(1)
}