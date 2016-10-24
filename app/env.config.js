var appConfig = {
    activeEndpoint:"@@environment",
    appEndpointList:{
        default:{
            getPeople:""    
        },
        dev:{
            getPeople:"mocks/people.json"
        }
    }
};