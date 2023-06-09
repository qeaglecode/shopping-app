import { useState } from 'react';
import s from './right-header.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import Link from 'next/link';

const RightHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={s['box-right-header']}>
      <ul>
        <li className={s['hidden-on-mobile']}><a href='/home'>Trang Chủ</a></li>
        <li className={s['hidden-on-mobile']}><a href='/introduce'>Giới Thiệu</a></li>
        <li className={s['hidden-on-mobile']}><a href='/procedure'>Quy Trình</a></li>
        <li className={s['hidden-on-mobile']}><a href='/project'>Dự Án</a></li>
        <li className={s['hidden-on-mobile']}>
          <a href='/' >Sản phẩm</a>
          <ul>
            <li><a href="/products/furniture">Nội Thất</a></li>
            <li><a href="/products/exterior">Ngoại Thất</a></li>
            <li><a href="/products/decorate">Trang Trí</a></li>
          </ul></li>
        <li className={s['hidden-on-mobile']}><a href='/contact'>Liên hệ</a></li>
        <li className={s['menu-icon']} onClick={() => setShowMenu(true)}><MenuOutlined /></li>
      </ul>

      <Drawer
        open={showMenu}
        placement='right'
        closable
        onClose={() => setShowMenu(false)}
      >
        <Menu>
          <Menu.Item>
            <Link href="/">
              Trang Chủ
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default RightHeader;