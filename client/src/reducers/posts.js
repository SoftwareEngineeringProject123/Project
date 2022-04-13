export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter( (post) => post._id !== action.payload ) // keeps all of the posts except the one where the id does not equal the payload
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
                //action.payload is the newly updated post, else return the post as it was
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}