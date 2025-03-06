import http from 'k6/http'
import { ENDPOINTS } from '../support/base/constants.js'
import ticketDynamicData from '../data/dynamic/ticketDynamic.js'
import { testConfig } from '../support/config/environment.js'

const url = testConfig.environment.htm.url
const endpoint = ENDPOINTS.TICKET_ENDPOINT

export function getTickets(){
    return http.get(`${url}` + `${endpoint}`)
}

export function createTicket(){
    const payload = JSON.stringify(ticketDynamicData());
    const params = {
        headers: {'Content-Type': 'application/json',},};
    return http.post(`${url}` + `${endpoint}`, payload, params)
}