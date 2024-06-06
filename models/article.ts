import { Auditable } from "./auditable";

export interface Article extends Auditable {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    body: string,
    published: boolean
}