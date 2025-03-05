export const testConfig = {
    environment: {
        htm: {
            url: 'http://localhost:3000'
        }
    },
    load: {
        stages: [
            { duration: '30s', target: 50 },
            { duration: '1m', target: 80 },
            { duration: '30s', target: 80 },
            { duration: '30s', target: 0}
          ],
        thresholds: {
            http_req_failed: ['rate<0.01'],
            http_req_duration: ['p(95)<900'], 
        },
    },
}