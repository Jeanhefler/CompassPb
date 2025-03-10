import { getTickets } from "../../service/ticketService.js";
import { testConfig } from "../../support/config/environment.js";
import { BaseChecks } from "../../support/base/checks.js";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "TicketEndurance.html": htmlReport(data),
    };
}

let check = new BaseChecks()
export const options = testConfig.endurance

export default function(){
    const res = getTickets()
    check.checkStatusCode200(res)
    sleep(1)
}