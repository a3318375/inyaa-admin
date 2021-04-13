import type { Router, RouteRecordRaw } from 'vue-router';

import { permissionStore } from '/@/store/modules/permission';

import { PageEnum } from '/@/enums/pageEnum';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // Jump to the 404 page after processing the login
    if (from.path === LOGIN_PATH && to.name === PAGE_NOT_FOUND_ROUTE.name) {
      next(PageEnum.BASE_HOME);
      return;
    }

    // Whitelist can be directly entered
    if (whitePathList.includes(to.path as PageEnum)) {
      next();
      return;
    }

    if (permissionStore.getIsDynamicAddedRouteState) {
      next();
      return;
    }
    const routes = await permissionStore.buildRoutesAction();

    routes.forEach((route) => {
      router.addRoute((route as unknown) as RouteRecordRaw);
    });

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    permissionStore.commitDynamicAddedRouteState(true);
    next(nextData);
  });
}
