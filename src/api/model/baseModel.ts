export interface BasicPageParams {
  number: number;
  size: number;
}

export interface BasicFetchResult<T extends any> {
  items: T;
  total: number;
}
