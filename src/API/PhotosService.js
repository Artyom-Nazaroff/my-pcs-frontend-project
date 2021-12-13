import axios from "axios";

export default class PhotosService {
    static async getPhotosById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        return response;
    };

    static async getLargePhotoById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        return response;
    };
}