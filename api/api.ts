import axios from "axios";

export class Http<T> {
    private apiUrl = process.env.EXPO_PUBLIC_API_URL;
    protected resource: string = '';

    protected get = async (): Promise<T[]> => {
        const response = await axios.get(`${this.apiUrl}/${this.resource}`);
        return response.data;
    }
}