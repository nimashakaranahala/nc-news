import axios, { AxiosHeaders } from "axios"

export function getTopics(){
    return axios.get("https://nc-news-app-nhmw.onrender.com/api/topics")
}


