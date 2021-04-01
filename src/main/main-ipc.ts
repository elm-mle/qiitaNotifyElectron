import {ipcMain} from "electron";
import {DatabaseFactory} from "./database/database-factory";
import {TagRepository} from "./tag/tag-repository";
import {QiitaArticleClient} from "./job/qiita-article-client";



export const startJob = () => {
    const db = DatabaseFactory.factoryDataBase('MOCK');

    const repository = new TagRepository(db);

    const articleClient = new QiitaArticleClient();

    ipcMain.handle("addTag", async (event, tag :string)=>{
        await repository.addTag(tag);
    });
    ipcMain.handle("deleteTag", (event, tag :string)=>{
        repository.deleteTag(tag);
    });
    ipcMain.handle("selectAll", async (_)=>{

        return repository.selectAll();
    });
    ipcMain.handle("fetchTags", async (event, tag? :string)=>{
        return await articleClient.fetchQiitaTagsAsync(tag);
    });
// ipcMain.handle("deleteTag", (event, tag :string)=>{
// ipcMain.handle("deleteTag", (event, tag :string)=>{
//     client.deleteTag(tag);
// });

}

