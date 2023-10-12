import Axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';

export const axiosInstance = Axios.create({
	baseURL: `${PUBLIC_API_URL}/api`
});
