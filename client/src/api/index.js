import axios from 'axios'

const url = `http://localhost:5000/posts` // route to get to the backend


export const fetchPosts = ()=>{

    return axios.get(url) // return the posts in th database from the api/server
}