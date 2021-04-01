export const createApiToTagList = (tagName: string) =>
    tagName.length === 0?
        "https://qiita.com/api/v2/tags"
        :`https://qiita.com/api/v2/tags/${tagName}`;

export const createLatestArticleApi = (tags?:string[]): string => {

    return  tags===undefined?
         "https://qiita.com/api/v2/items?page=1&per_page=1"
        :`https://qiita.com/api/v2/items?page=1&per_page=1&query=tag:${tagsLinking(tags)}`;
}

const tagsLinking = (tags:string[]): string => tags.join(" OR tag:")


export const createTagsApi = (tag?: string)  =>  tag===undefined || tag.length===0? "https://qiita.com/api/v2/tags" : `https://qiita.com/api/v2/tags/${tag}`;
