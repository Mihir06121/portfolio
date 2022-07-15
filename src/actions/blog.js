import {API} from "../config"
// import axios from 'axios'

export const getBlogs = () => {
    return fetch(`${API}/blogs`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}