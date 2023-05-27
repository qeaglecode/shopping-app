import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import logo from '../../../assets/images/ts_house.png';
import s from './footer.module.scss';

const Footer = () => {
  return (
    <div id={s['footer-container']}>
      <ul className={s['social-contacts']}>
        <div className={s['section-logo']}>
          <a href='/'>
            <img
              src={logo}
              alt='logo'
              className={s['logo']}
            />
          </a>
          {' '}
          <span className={s['company-name']}>T'S HOUSE</span>
        </div>
        <li className={s['company-description']}>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </li>
      </ul>
      <ul className={s['services']}>
        <h1 className={s['title']}>Dịch vụ</h1>
        <li><a href='/'>Báo giá</a></li>
        <li><a href='/'>Tư Vấn</a></li>
        <li><a href='/'>Lên Thiết Kế</a></li>
        <li><a href='/'>Thiết Kế Nội Thất</a></li>
        <li><a href='/'>Thiết Kế Ngoại Thất</a></li>
        <li><a href='/'>Thi Công</a></li>
      </ul>
      <ul className={s['products']}>
        <h1 className={s['title']}>Sảm phẩm</h1>
        <li><a href='/'>Bàn</a></li>
        <li><a href='/'>Ghế</a></li>
        <li><a href='/'>Kệ</a></li>
        <li><a href='/'>Tủ</a></li>
        <li><a href='/'>Bếp</a></li>
        <li><a href='/'>Giường</a></li>
      </ul>
      <ul className={s['address']}>
        <h1 className={s['title']}>Địa chỉ</h1>
        <li>95 thôn 5, xã Hòa Khánh, Buôn Mê Thuột, Đắk Lắk, Việt Nam</li>
        <div className={s['social-logo']}>
          <FacebookOutlined />
          <YoutubeOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
      </ul>
    </div>
  );
}

export default Footer;