import {
  Avatar,
  Layout
} from 'antd';

import style from './header.module.scss';
import Image from 'next/image';

type IProps = {
  handleOpenPopup: Function;
}

function Header(this: any, {
  handleOpenPopup
}: IProps) {
  const rightContent = (
    <ul
      className={style['right-content']}
    >
      <li>
        <Avatar
          src='/user.png' 
          onClick={handleOpenPopup(true)}
          />
      </li>
    </ul>
  );

  return (
    <Layout.Header className={`${style.header}`} id="layoutHeader">
      <div className={`${style.leftContainer}`}>
        <Image src="/user.png" alt="logo" width={100} height={72} />
      </div>

      <div className={`${style.rightContainer}`}>{rightContent}</div>
    </Layout.Header>
  );
}

export default Header;
