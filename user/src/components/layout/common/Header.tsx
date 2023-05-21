import RightHeader from './right-header';
import s from './header.module.scss';

const Header = () => {
  return (
    <h1 id={s['header-container']}>
      <div className={s['left-content']}>
        <a href='/'>
          <img src="https://goldidea.vn/upload/nike.png" alt='logo' />
        </a>
      </div>

      <div className={s['right-content']}>
        <RightHeader />
      </div>
    </h1>
  );
}

export default Header;