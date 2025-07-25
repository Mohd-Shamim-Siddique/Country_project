import axios from "axios";

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const getCountry = () => {
    return api.get('/all?fields=name,flags,capital,id,population,region')
}

//fetch indv data

export const indvCountryData = async (name) => {
    const res = await api.get(`/name/${name}?fullText=true&fields=name,flags,capital,population,region,borders,currencies,subregion,tld,languages`)
    return res.data
}