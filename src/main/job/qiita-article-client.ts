import axios from "axios";
import {createLatestArticleApi, createTagsApi} from "../qiita-api";
import {QiitaArticleJsonModel} from "./qiita-article-json-model";
import {DateManager} from "../date-manager";
import {convertToTagsJsonModel} from "../tag/converter";
import {NetworkTagJsonModel} from "../tag/tag-model";

export class QiitaArticleClient{

    private _latestArticle: QiitaArticleJsonModel|undefined;
    get latestArticle(){
        return this._latestArticle;
    }

    async isPostNewArticle(tags?: string[]): Promise<boolean>{
        this._latestArticle = await QiitaArticleClient.fetchLatestArticle(tags);
        const dateManager = new DateManager();
        return dateManager.isNotOverTime({
            source: new Date(),
            destination: new Date(this._latestArticle.updated_at),
            limitHours:1});
    }

    async fetchQiitaTagsAsync(tag?: string): Promise<NetworkTagJsonModel[]>{

        const json = await axios.get(createTagsApi(tag));
        return convertToTagsJsonModel(json.data) ?? [];
    }

    private static async fetchLatestArticle(tags?: string[]): Promise<QiitaArticleJsonModel>{
        const articles = await axios.get(createLatestArticleApi(tags));
        return QiitaArticleClient.convertToJsonModel(articles.data)[0];
    }

    private static convertToJsonModel(articles: any): QiitaArticleJsonModel[]{
        return articles as QiitaArticleJsonModel[];
    }
}
