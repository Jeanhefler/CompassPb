import { check } from "k6";

export class BaseChecks { 
    
    checkStatusCode200(response, expectedStatus = 200){
        check(response , {
            'status code check 200': (r) => r.status === expectedStatus,
        });
    };

    checkStatusCode201(response, expectedStatus = 201){
        check(response , {
            'status code check 201': (r) => r.status === expectedStatus,
        });
    };
    checkStatusCode204(response, expectedStatus = 200){
        check(response , {
            'status code check 204': (r) => r.status === expectedStatus,
        });
    };
}