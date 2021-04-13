export interface UploadApiResult {
  message: string;
  code: number;
  data: string;
}

export interface FileListItem {
  type: number;
  url: string;
}
