import { Http } from "@/api/api"


export class ArticleService extends Http {
    protected resource: string = 'articles'; 
 
    getArticles = async () => {
        return await this.get();
    }
}