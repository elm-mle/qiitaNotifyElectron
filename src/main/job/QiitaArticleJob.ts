import {Job} from "./job";
import {QiitaArticleClient} from "./qiita-article-client";
import {Notification}  from 'electron';
import open from "open";

import {DatabaseFactory} from "../database/database-factory";
import {TagRepository} from "../tag/tag-repository";
export  class QiitaArticleJob extends Job{
    private _client = new QiitaArticleClient();

    notify(): void {
        const info = this._client.latestArticle;
        const notify = new Notification({title: "新規記事が投稿されました!", body: info?.title});

        notify.on('click', ()=>{
            if(info === undefined || info.url === undefined) return;

            open(info.url).catch(e => console.log(e));
        });
        notify.show();
    }

    async runMethodAsync(): Promise<boolean> {

        const db = DatabaseFactory.factoryDataBase('MOCK');
        const tagList = new TagRepository(db);

        const model = tagList.selectAll();

        return await this._client.isPostNewArticle(model.map(m => m.id));
    }

}
