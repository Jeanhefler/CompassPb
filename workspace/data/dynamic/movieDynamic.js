const { faker } = require('./lib/node_modules/@faker-js/faker/dist/locale/pt_BR.cjs');

export default function movieDynamicData(){
    let title = faker.book.title()
    let description = faker.lorem.sentence()
    const movie = {
        title: `${title}`,
        description: `${description}`,
        launchdate: "2025-03-05T17:58:28.000Z",
        showtimes: [
            "10-09-2024"
        ]
    }
    return movie;
}
