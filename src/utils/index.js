import axios from "axios";

let baseURL = "http://localhost:8085/api/v1.0/";
let http = axios.create({baseURL});

function getOptions(options){
    //TODO
    let token = "";//{}.state.login.auth.token;
    options.headers = Object.assign(options.headers, token ? {authorization:token} : {});
    return options;
}

export default {
    get(url, request, options={headers:{}}) {                
        return http.get(url, getOptions(options))
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    post(url, request, options={headers:{}}) {        
        return http.post(url, request, getOptions(options))
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    put(url, request, options={headers:{}}) {        
        return http.put(url, request, getOptions(options))
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    patch(url, request, options={headers:{}}) {        
        return http.patch(url, request, getOptions(options))
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    delete(url, request, options={headers:{}}) {        
        return http.delete(url, getOptions(options))
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
};