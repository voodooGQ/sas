export const SET_ACTIVE_NAV_ITEM = 'ui/header/set_active_nav_item';
export const SET_ACTIVE_NAV_ITEM_FROM_STORAGE = 'ui/header/set_active_nav_item_from_storage';
export const SET_BLOG_ARTICLE_DATA = 'ui/blog/set_blog_article_data';

export interface HeaderState {
    active: string;
}

export interface BlogState {
    data: object;
}
