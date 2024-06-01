import axios, { AxiosPromise } from "axios";

export class Http {
    protected resource: string = '';

    protected get = async (): AxiosPromise => {
        return await axios.get(this.resource);
    }
}