import { getMovies, deleteMovie } from "../../service/movieService.js";
import { testConfig } from "../../support/config/environment.js";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "movieLatency.html": htmlReport(data),
    };
}

export const options = testConfig.latency

export function setup(){
    const res = getMovies()
    return { responseData: res.json() }
}

export default function(data){
    let movies = data.responseData

    movies.forEach((movie) => {
        let movieId = movie._id
        let res = deleteMovie(movieId)
        sleep(1);
    });
}
