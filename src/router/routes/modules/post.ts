import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/post',
  name: 'post',
  component: LAYOUT,
  redirect: '/post/article',
  meta: {
    icon: 'ion:settings-outline',
    title: t('routes.post.moduleName'),
  },
  children: [
    {
      path: 'article',
      name: 'ArticleManagement',
      meta: {
        title: t('routes.post.article'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/post/article/index.vue'),
    },
    {
      path: 'type',
      name: 'TypeManagement',
      meta: {
        title: t('routes.post.type'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/post/type/index.vue'),
    },
    {
      path: 'tag',
      name: 'TagManagement',
      meta: {
        title: t('routes.post.tag'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/post/tag/index.vue'),
    },
    {
      path: 'file',
      name: 'FileManagement',
      meta: {
        title: t('routes.post.file'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/post/file/index.vue'),
    },
  ],
};

export default system;
