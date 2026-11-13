const rootPath = '';

export const Routings = {
  home: {
    path: rootPath || '/',
    toNavigate: () => `${rootPath}/`,
  },
  good: {
    list: {
      path: 'goods',
      toNavigate: (): string => `${rootPath}/${Routings.good.list.path}`,
    },
    create: {
      path: 'goods/create',
      toNavigate: (): string => `${rootPath}/${Routings.good.create.path}`,
    },
    view: {
      path: 'goods/view/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.good.view.path.replace(':uid', uid)}`,
    },
    edit: {
      path: 'goods/edit/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.good.edit.path.replace(':uid', uid)}`,
    },
  },
  client: {
    list: {
      path: 'clients',
      toNavigate: (): string => `${rootPath}/${Routings.client.list.path}`,
    },
    create: {
      path: 'clients/create',
      toNavigate: (): string => `${rootPath}/${Routings.client.create.path}`,
    },
    view: {
      path: 'clients/view/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.client.view.path.replace(':uid', uid)}`,
    },
    edit: {
      path: 'clients/edit/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.client.edit.path.replace(':uid', uid)}`,
    },
  },
  shop: {
    list: {
      path: 'shops',
      toNavigate: (): string => `${rootPath}/${Routings.shop.list.path}`,
    },
    create: {
      path: 'shops/create',
      toNavigate: (): string => `${rootPath}/${Routings.shop.create.path}`,
    },
    view: {
      path: 'shops/view/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.shop.view.path.replace(':uid', uid)}`,
    },
    edit: {
      path: 'shops/edit/:uid',
      toNavigate: (uid: string): string =>
        `${rootPath}/${Routings.shop.edit.path.replace(':uid', uid)}`,
    },
  },
};
