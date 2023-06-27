import {
  Drawer, Switch
} from 'antd';
import { isBrowser } from 'react-device-detect';
import { SiderMenu } from './menu';
import style from './sider.module.scss';
import { useState } from 'react';

type IProps = {
  openPopup: boolean;
  menus: any;
  closePopup?: Function;
}

function Sider({
  openPopup = false,
  closePopup = () => { },
  menus = []
}: IProps) {
  const [theme, setTheme] = useState('dark');

  const onThemeChange = (themeValue: any) => {
    setTheme(themeValue)
  };

  return (
    <div className={style.menuContainer}>
      <Drawer
        open={openPopup}
        width={isBrowser ? 300 : "100%"}
        placement="right"
        onClose={() => closePopup(false)}
      >
        <SiderMenu
          menus={menus}
          theme={theme as any}
        />
        <div className={style.switchTheme}>
          <Switch
            onChange={() => onThemeChange(theme === 'dark' ? 'light' : 'dark' )}
            defaultChecked={theme === 'dark'}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Drawer>
    </div>
  );
}

export default Sider;
