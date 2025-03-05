import http from 'k6/http'
import { ENDPOINTS } from '../support/base/constants.js'
import { testConfig } from '../support/config/environment.js'
import movieDynamicData from '../data/dynamic/movieDynamic.js'

const url = testConfig.environment.htm.url
const endpoint = ENDPOINTS.MOVIE_ENDPOINT

export function getMovies(){
    return http.get(url + endpoint)
}

export function createMovie(){
const payload = JSON.stringify(movieDynamicData());
const params = {
    headers: {'Content-Type': 'application/json',},};
return http.post(`${url}` + `${endpoint}`, payload, params)
}
