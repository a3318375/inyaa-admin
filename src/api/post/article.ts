import {
  ArticleParams,
  ArticleInfoItem,
  ArticleListPage,
  TypeListItem,
  TagListItem,
} from './model/articleModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  PostSave = '/post/save',
  PostGet = '/post/get',
  PostList = '/post/list',

  TypeSave = '/type/save',
  TypeList = '/type/list',
  TypeDelete = '/type/delete',

  TagSave = '/tag/save',
  TagList = '/tag/list',
  TagDelete = '/tag/delete',
}

export const findPostList = (params: ArticleParams) =>
  defHttp.get<ArticleListPage>({ url: Api.PostList, params });

export const getPostById = (id: String) =>
  defHttp.get<ArticleInfoItem>({ url: Api.PostGet, params: { id: id } });

export const findTypeList = (params: ArticleParams) =>
  defHttp.get<TypeListItem>({ url: Api.TypeList, params });

export const findTagList = (params: ArticleParams) =>
  defHttp.get<TagListItem>({ url: Api.TagList, params });

export const saveType = (params: ArticleParams) =>
  defHttp.post<String>({ url: Api.TypeSave, params });

export const postSave = (params: ArticleParams) =>
  defHttp.post<String>({ url: Api.PostSave, params });

export const saveTag = (params: ArticleParams) =>
  defHttp.post<String>({ url: Api.TagSave, params });

export const deleteType = (id: string) =>
  defHttp.post<String>({ url: Api.TypeDelete, params: { id: id } });

export const deleteTag = (id: string) =>
  defHttp.post<String>({ url: Api.TagDelete, params: { id: id } });
