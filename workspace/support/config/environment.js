export const testConfig = {
    environment: {
        htm: {
            url: 'http://localhost:3000'
        }
    },
    load: {
        stages: [
            { duration: '1m', target: 80 },
            { duration: '1m', target: 80 },
            { duration: '1m', target: 0}
          ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<100'], 
        },
    },
    endurance: {
        stages: [
            { duration: '30s', target: 300 },
            { duration: '4m', target: 300 },
            { duration: '30s', target: 0 },
          ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<200'], 
        },
    },
    volume : {
        stages: [
            { duration: '30s', target: 50 },
            { duration: '4m', target: 50 },
            { duration: '30s', target: 0 },
        ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<300'], 
        },
    },
    latency : {
        stages: [
            { duration: '30s', target: 50 },
            { duration: '4m', target: 50 },
            { duration: '30s', target: 0 },
        ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<400'], 
        },
    },
    capacity : {
        stages: [
            { duration: '1m', target: 500 },
            { duration: '3m', target: 500 },
            { duration: '1m', target: 0 },

        ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<50'], 
        },
    },
    loadTickets: {
        stages: [
            { duration: '1m', target: 80 },
            { duration: '1m', target: 80 },
            { duration: '1m', target: 0}
          ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<300'], 
        },
    },

}