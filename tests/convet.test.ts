import {NetworkTagJsonModel} from "../src/main/tag/tag-model";
import {convertToTagsJsonModel} from "../src/main/tag/converter";

describe("convertTest", ()=>{
    test("タグが一件", ()=> {
        const json = {"followers_count":0,"icon_url":null,"id":"django-prometheus","items_count":1};
        const model: NetworkTagJsonModel[] | undefined = convertToTagsJsonModel(json);
        const ex = [json];
        expect(model).not.toBeUndefined();
        expect(model).toStrictEqual(ex);
    });
    test("タグが2件", ()=> {
        const json = [{"followers_count":0,"icon_url":null,"id":"arctan","items_count":1},{"followers_count":0,"icon_url":null,"id":"django-prometheus","items_count":1}];
        const model: NetworkTagJsonModel[] | undefined = convertToTagsJsonModel(json);
        const ex = [json];
        expect(model).not.toBeUndefined();
        expect(model).toStrictEqual(ex);
    });
});
