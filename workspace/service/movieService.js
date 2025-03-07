import http from 'k6/http'
import { ENDPOINTS } from '../support/base/constants.js'
import { testConfig } from '../support/config/environment.js'
import movieDynamicData from '../data/dynamic/movieDynamic.js'

const url = testConfig.environment.htm.url
const endpoint = ENDPOINTS.MOVIE_ENDPOINT

export function getMovies(){
    return http.get(url + endpoint)
}

export function getMovieById(id){
    return http.get(`${url}` + `${endpoint}` + "/" + id)
}

export function createMovie(){
const payload = JSON.stringify(movieDynamicData());
const params = {
    headers: {'Content-Type': 'application/json',},};
return http.post(`${url}` + `${endpoint}`, payload, params)
}

export function updateMovie(id){
    const payload = JSON.stringify(movieDynamicData());
    const params = {
    headers: {'Content-Type': 'application/json',},};
    return http.put(`${url}` + `${endpoint}` + "/" + id, payload, params)
}

export function deleteMovie(id){
    const params = { headers: { 
        'X-MyHeader': 'k6test',
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
     } };
    http.del(`${url}` + `${endpoint}` + "/" + id, null, params);
}