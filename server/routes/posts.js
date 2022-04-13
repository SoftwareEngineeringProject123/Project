import express from "express";
import { getPosts, createPosts, updatePosts, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();


router.get('/', getPosts);
router.post('/', createPosts);
router.put('/:id', updatePosts);
router.delete('/:id', deletePost);
router.put('/:id/likePost', likePost);



export default router;