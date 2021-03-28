export interface ArticleParams {
  title: string;
  summary: string;
  status: number;
  typeId: number;
  tagId: number;
  content: string;
}

export interface ArticleListItem {
  title: string;
  summary: string;
  status: number;
  views: string;
  comments: string;
}
export interface ArticleListPage {
  content: ArticleListItem[];
  number: number;
  size: number;
  totalPages: number;
}

export interface ArticleInfoItem {
  title: string;
  sum: string;
}

export interface TypeListItem {
  name: string;
  remark: string;
}
export interface TagListItem {
  name: string;
  remark: string;
}
