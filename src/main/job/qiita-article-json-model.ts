export interface Tag {
    name: string;
    versions: any[];
}

export interface User {
    description?: any;
    facebook_id?: any;
    followees_count: number;
    followers_count: number;
    github_login_name?: any;
    id: string;
    items_count: number;
    linkedin_id?: any;
    location?: any;
    name: string;
    organization?: any;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name?: any;
    website_url?: any;
}

export interface QiitaArticleJsonModel {
    rendered_body: string;
    body: string;
    coediting: boolean;
    comments_count: number;
    created_at: Date;
    group?: any;
    id: string;
    likes_count: number;
    private: boolean;
    reactions_count: number;
    tags: Tag[];
    title: string;
    updated_at: Date;
    url: string;
    user: User;
    page_views_count?: any;
}
