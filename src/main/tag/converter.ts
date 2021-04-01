import {NetworkTagJsonModel} from "./tag-model";

export const convertToTagsJsonModel = (json: any): NetworkTagJsonModel[] | undefined =>  {

    if(json === undefined || json === null) return undefined;

    return Array.isArray(json)? json as NetworkTagJsonModel[] : [json as NetworkTagJsonModel];
}
