import axios from "axios";


export default class FriendsService {
    static async getAllFriends() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response;
    };

    static async getFriendById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response;
    };
}






