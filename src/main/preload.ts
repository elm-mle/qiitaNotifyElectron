import {contextBridge, ipcRenderer} from 'electron';

export class Test{
    test = ()=>{console.log("hello! world")}
}



contextBridge.exposeInMainWorld(
    'api',
    new Test()
);
contextBridge.exposeInMainWorld(
    'selectAll',
    async () => await ipcRenderer.invoke("selectAll")
);
contextBridge.exposeInMainWorld(
    'addTag',
    async (tagId: string) => await ipcRenderer.invoke("addTag", tagId)
);

contextBridge.exposeInMainWorld(
    'fetchTags',
    async (tags?: string) => await ipcRenderer.invoke("fetchTags", tags)
);
