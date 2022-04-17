import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = ( id, post ) => async (dispatch) => {

    try{
        const { data } = await api.updatePost( id, post ); // returns updated post

        dispatch( { type : 'UPDATE', payload : data } );

    }catch (error) {
        console.log(error);
    }

}


export const deletePost = ( id ) => async (dispatch) => {

    try{
            await api.deletePost( id ); // to delete the post

            dispatch( { type : 'DELETE', payload : id} );

    }catch (error) {
        console.log(error.message);
    }

}


export const likePost = ( id ) => async (dispatch) => {

    try{
        const { data } = await api.likePost( id ); // returns updated post

        dispatch( { type : 'LIKE', payload : data} );

    }catch (error) {
        console.log(error.message);
    }

}