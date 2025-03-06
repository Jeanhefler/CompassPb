const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs');

export default function ticketDynamicData(){
    let movieId = faker.number.bigInt()
    let userId = faker.number.int()

    const ticket = {
        "movieId": `${movieId}`,
        "userId": `${userId}`,
        "seatNumber": 0,
        "price": 0,
        "showtime": "2025-03-06T16:18:02.651Z"
    }
    return ticket;
}