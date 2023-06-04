import RightHeader from './right-header';
import Image from 'next/image';
import logo from '../../../assets/images/ts_house.png';
import s from './header.module.scss';

const Header = () => {
  return (
    <h1 id={s['header-container']}>
      <div className={s['left-content']}>
        <a href='/'>
          <Image src={logo} alt='logo' />
        </a>
      </div>

      <div className={s['right-content']}>
        <RightHeader />
      </div>
    </h1>
  );
}

export default Header;