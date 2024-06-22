import { Http } from "@/api/api"
import { Article } from "@/models/article";


export class ArticleService extends Http<Article> {
    protected resource: string = 'articles'; 
 
    getArticles = async (): Promise<Article[]> => await this.get();
    
}