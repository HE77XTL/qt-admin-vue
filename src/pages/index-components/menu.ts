export interface MenuItemInterface {
  name: string;
  id: string;
  url?: string;
  children?: Array<MenuItemInterface>;
}


const menu: Array<MenuItemInterface> = [
  {
    name: 'dashboard',
    id: 'dashboard',
    url: '/dashboard'
  },
  {
    name: '页面路由测试',
    id: 'autoRouterTest',
    children: [
      {
        name: '主题修改',
        id: 'changeTheme',
        url: '/theme'
      },
      {
        name: 'heds',
        id: 'heds',
        url: '/heds'
      }
      ,
      {
        name: 'test',
        id: 'test',
        url: '/test'
      }
    ]
  },
];
export {
  menu
};
