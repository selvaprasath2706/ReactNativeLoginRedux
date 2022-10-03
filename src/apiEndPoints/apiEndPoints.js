/* eslint-disable prettier/prettier */
import axios from 'axios';

const landingPageApi = async () => {
    const data = await axios.get('https://reqres.in/api/users?page=2');
    return data;
};
export { landingPageApi };
