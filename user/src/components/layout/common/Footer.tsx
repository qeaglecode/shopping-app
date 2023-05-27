import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import logo from '../../../assets/images/ts_house.png';
import s from './footer.module.scss';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div id={s['footer-container']}>
      <Row>
        <Col md={9} xs={24}>
          <div className={s['social-contacts']}>
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
            <p className={s['company-description']}>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </Col>
        <Col md={5} xs={12}>
          <div className={s['services']}>
            <h1 className={s['title']}>Dịch vụ</h1>
            <ul>
              <li><a href='/'>Báo giá</a></li>
              <li><a href='/'>Tư Vấn</a></li>
              <li><a href='/'>Lên Thiết Kế</a></li>
              <li><a href='/'>Thiết Kế Nội Thất</a></li>
              <li><a href='/'>Thiết Kế Ngoại Thất</a></li>
              <li><a href='/'>Thi Công</a></li>
            </ul>
          </div>
        </Col>
        <Col md={5} xs={12}>
          <div  className={s['products']}>
            <h1 className={s['title']}>Sảm phẩm</h1>
            <ul>
              <li><a href='/'>Bàn</a></li>
              <li><a href='/'>Ghế</a></li>
              <li><a href='/'>Kệ</a></li>
              <li><a href='/'>Tủ</a></li>
              <li><a href='/'>Bếp</a></li>
              <li><a href='/'>Giường</a></li>
            </ul>
          </div>
        </Col>
        <Col md={5} xs={24}>
          <div className={s['address']}>
            <h1 className={s['title']}>Địa chỉ</h1>
            <p>95 thôn 5, xã Hòa Khánh, Buôn Mê Thuột, Đắk Lắk, Việt Nam</p>
            <div className={s['social-logo']}>
              <FacebookOutlined />
              <YoutubeOutlined />
              <TwitterOutlined />
              <InstagramOutlined />
            </div>
          </div>
        </Col>
        <Col md={24} xs={24}>
          <p className={s['declare']}>
            Developed by
            {' '}
            <a className={s['author-name']} href='https://www.facebook.com/qeagleofficial'>Q Eagle</a>
            {' '}
            -
            {' '}
            <strong>Not copied</strong>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;