import { createTicket } from "../../service/ticketService.js";
import { testConfig } from "../../support/config/environment.js";
import { BaseChecks } from "../../support/base/checks.js";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "TicketLoad.html": htmlReport(data),
    };
}

let check = new BaseChecks()
export const options = testConfig.loadTickets

export default function(){
    const res = createTicket()
    check.checkStatusCode201(res)
    sleep(1)
}