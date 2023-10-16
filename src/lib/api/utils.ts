import { PUBLIC_API_URL } from '$env/static/public';

export const getImageUrl = (location: string) => PUBLIC_API_URL + location;
