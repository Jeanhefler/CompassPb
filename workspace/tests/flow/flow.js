import { getMovies ,createMovie, getMovieById, updateMovie, deleteMovie } from "../../service/movieService.js";
import { createTicket, getTickets } from "../../service/ticketService.js";
import { BaseChecks } from "../../support/base/checks.js";
import { sleep } from "k6";
/*import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "flow.html": htmlReport(data),
    };
}*/

let check = new BaseChecks()

export function setup(){
    let postMovie = createMovie()
    check.checkStatusCode201(postMovie)

    const ticket = createTicket()
    check.checkStatusCode201(ticket)

    const res = getMovies()
    check.checkStatusCode200(res)

    return { responseData: res.json() }
}

export default function(data){
    let movies = data.responseData
    let movieId = (movies[0]._id);

    let getMovie = getMovieById(movieId);
    sleep(1)
    check.checkStatusCode200(getMovie)

    let putMovie = updateMovie(movieId);
    sleep(1)
    check.checkStatusCode200(putMovie)

    let delMovie = deleteMovie(movieId);
    sleep(1)

    let findTickets = getTickets()
    sleep(1)
    check.checkStatusCode200(findTickets)
}