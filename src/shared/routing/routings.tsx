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
  },
  client: {
    list: {
      path: 'clients',
      toNavigate: (): string => `${rootPath}/${Routings.client.list.path}`,
    },
  },
  shop: {
    list: {
      path: 'shops',
      toNavigate: (): string => `${rootPath}/${Routings.shop.list.path}`,
    },
  },
};
