import {createLatestArticleApi} from "../src/main/qiita-api";

describe("Api作成テスト", ()=>{

    test("新規記事用のApiクエリー(タグ指定なし)",()=>{
        const actual:string = createLatestArticleApi();
        const ex = "https://qiita.com/api/v2/items?page=1&per_page=1";
        expect(actual).toBe(ex);
    });

    test("新規記事用のApiクエリー(タグ1つだけ)",()=>{
        const tags = ["java"];
        const actual:string = createLatestArticleApi(tags);
        const ex = "https://qiita.com/api/v2/items?page=1&per_page=1&query=tag:java";
        expect(actual).toBe(ex);
    });

    test("新規記事用のApiクエリー(タグ1つだけ)",()=>{
        const tags = ["kotlin"];
        const actual:string = createLatestArticleApi(tags);
        const ex = "https://qiita.com/api/v2/items?page=1&per_page=1&query=tag:kotlin";
        expect(actual).toBe(ex);
    });

    test("新規記事用のApiクエリー(タグ3)",()=>{
        const tags = ["kotlin", "java", "javascript"];
        const actual:string = createLatestArticleApi(tags);
        const ex = "https://qiita.com/api/v2/items?page=1&per_page=1&query=tag:kotlin OR tag:java OR tag:javascript";
        expect(actual).toBe(ex);
    });



});
