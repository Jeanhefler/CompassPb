import { getMovies, getMovieById } from "../../service/movieService.js";
import { testConfig } from "../../support/config/environment.js";
import { BaseChecks } from "../../support/base/checks.js";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "movieCapacity.html": htmlReport(data),
    };
}
let check = new BaseChecks()
export const options = testConfig.capacity

export function setup(){
    const res = getMovies()
    return { responseData: res.json() }
}

export default function(data){
    let movies = data.responseData

    movies.forEach((movie) => {
        let movieId = movie._id
        let res = getMovieById(movieId)
        sleep(1);
        check.checkStatusCode200(res)
    });
}