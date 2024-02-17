import axios from "axios";

const breweriesApi = axios.create({
    baseURL: "https://api.openbrewerydb.org/v1/breweries"
})

export default breweriesApi
