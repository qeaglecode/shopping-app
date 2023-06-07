import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {
  Avatar,
  Layout
} from 'antd';
import Link from 'next/link';

import style from './header.module.scss';
import { IUser } from '@src/interfaces';

type IProps = {
  collapsed?: boolean;
  onCollapseChange?: Function;
  currentUser?: IUser;
}

function Header(this: any, { collapsed = false, onCollapseChange = () => { }, currentUser = undefined }: IProps) {
  const rightContent = (
    <ul
      className={style['right-content']}
    >
      <li>
        <Link
          href="/account/settings"
          legacyBehavior
        >
          <a>
            <Avatar src='/user.png' />
          </a>
        </Link>
      </li>
      <li className="logout">
        <Link
          href="/auth/logout"
          legacyBehavior
        >
          <a><LogoutOutlined /></a>
        </Link>
      </li>
    </ul>
  );

  return (
    <Layout.Header className={`${style.header}`} id="layoutHeader">
      <div
        aria-hidden
        className="button"
        onClick={onCollapseChange.bind(this, !collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>

      <div className={`${style.rightContainer}`}>{rightContent}</div>
    </Layout.Header>
  );
}

export default Header;
