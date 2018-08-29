import axios from 'axios';

// export const baseUrl = 'http://data.fixer.io/api/latest';
export const baseUrl = 'https://next.json-generator.com/api/json/get/VkjqoEJvr';


const httpService = {

    async httpGet() {
        // const res = await axios.get(baseUrl + url);
        const res = await axios.get(baseUrl);
        return await res;
    },

};

export default httpService;