import axios from 'axios'

const url = `http://localhost:8000/posts` // route to get to the backend

export const fetchPosts = () => axios.get(url); // return the posts in th database from the api/server

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = ( id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);

export const deletePost = ( id ) => axios.delete(`${url}/${id}`) ;

export const likePost = ( id ) => axios.put(`${url}/${id}/likePost`) ;

