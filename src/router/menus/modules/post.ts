import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2000,
  menu: {
    name: t('routes.post.moduleName'),
    path: '/post',
    tag: {
      content: 'new',
    },
    children: [
      {
        path: 'article',
        name: t('routes.post.article'),
      },
      {
        path: 'type',
        name: t('routes.post.type'),
      },
      {
        path: 'tag',
        name: t('routes.post.tag'),
      },
      {
        path: 'file',
        name: t('routes.post.file'),
      },
    ],
  },
};
export default menu;
