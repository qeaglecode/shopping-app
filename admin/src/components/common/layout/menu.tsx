import { Menu, MenuTheme } from 'antd';
import { compact, flatten } from 'lodash';
import Router from 'next/router';
import { MenuInfo, SelectInfo } from 'rc-menu/lib/interface';

type IProps = {
  theme?: MenuTheme;
  menus: any;
}

export function SiderMenu({
  theme,
  menus,
}: IProps) {

  const clickMenu = (info: SelectInfo) => {
    const [selectedKey] = info.selectedKeys;
    let menuItem = menus.find((menu: any) => menu.key === selectedKey);

    if (!menuItem) {
      const subMenus = compact(flatten(menus.map((menu: any) => menu.children)));
      menuItem = (subMenus as any).find((menu: MenuInfo) => menu.key === selectedKey);
    }

    menuItem && Router.push(menuItem.route);
  };

  return (
    <aside
      className={`ant-layout-sider ant-layout-sider-${theme}`}
    >
      <div className="ant-layout-sider-children">
        <div className="logo" />
        <Menu
          mode="inline"
          theme={theme}
          items={menus}
          onSelect={clickMenu}
        />
      </div>
    </aside>
  );
}

export default SiderMenu;
