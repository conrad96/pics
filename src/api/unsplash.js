import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hd2lNe3hKojrG7Ks2ha6gqc4o3gyDuk-PuvhYfwJ450'
    }
});
