import axios from "axios";


export default class PostService {
    static async getAllPosts(page = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        return response;
    };

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    };

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    };

    static async getFriendPosts(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        return response;
    };
}






