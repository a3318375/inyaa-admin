import { UploadApiResult, FileListItem } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/@/utils/http/axios/types';

enum Api {
  ImgList = '/server/file/list',
  ImgUpload = '/server/file/upload',
  ImgCoverUpload = '/server/file/cover/upload',
}

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: Api.ImgUpload,
      onUploadProgress,
    },
    params
  );
}

export function uploadCover(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: Api.ImgCoverUpload,
      onUploadProgress,
    },
    params
  );
}

export const findImgList = () => defHttp.get<FileListItem>({ url: Api.ImgList, params: {} });
