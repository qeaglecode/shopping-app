import {
  Layout
} from 'antd';
import {
  BankFilled,
  BankOutlined,
  CameraOutlined,
  ContainerOutlined,
  DollarOutlined,
  FileImageOutlined,
  FlagOutlined,
  MailOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  ProfileOutlined,
  SkinOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  WomanOutlined
} from '@ant-design/icons';
import styles from './header.module.scss';
import Image from 'next/image';
import Sider from './sider';
import { useState } from 'react';

function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  const closePopup = (c: any) => {
    setOpenPopup(false);
  };
  
  const sliderMenus = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <PieChartOutlined />,
      children: [
        {
          key: 'stats',
          label: 'Statistic',
          route: '/dashboard'
        }
      ]
    },
    {
      key: 'posts',
      label: 'Static Pages',
      icon: <ContainerOutlined />,
      children: [
        {
          key: 'post-page',
          label: 'Page',
          route: '/posts?type=page'
        },
        {
          key: 'page-create',
          label: 'Create page',
          route: '/posts/create?type=page'
        }
      ]
    },
    {
      key: 'menu',
      label: 'FE Menu',
      icon: <MenuOutlined />,
      children: [
        {
          key: 'menu-listing',
          label: 'Existing menu options',
          route: '/menu'
        },
        {
          label: 'Create',
          key: 'create-menu',
          route: '/menu/create'
        }
      ]
    },
    {
      key: 'banner',
      label: 'Banners',
      icon: <FileImageOutlined />,
      children: [
        {
          key: 'banner-listing',
          label: 'Existing Banners',
          route: '/banner'
        },
        {
          label: 'Upload',
          key: 'upload-banner',
          route: '/banner/upload'
        }
      ]
    },
    {
      key: 'email-template',
      label: 'Email templates',
      icon: <MailOutlined />,
      children: [
        {
          key: 'email-listing',
          label: 'List',
          route: '/email-templates'
        }
      ]
    },
    {
      key: 'stream-categories',
      label: 'Stream-Categories',
      icon: <FlagOutlined />,
      children: [
        {
          key: 'stream-category-list',
          label: 'Listing',
          route: '/streams/categories'
        },
        {
          key: 'create-stream-category',
          label: 'Create Stream Category',
          route: '/streams/categories/create'
        }
      ]
    },
    {
      key: 'report-content',
      label: 'Report Content',
      icon: <FlagOutlined />,
      children: [
        {
          key: 'list-of-reports',
          label: 'Listing',
          route: '/report-content'
        },
        {
          label: 'Create Report Category',
          key: 'create-report-category',
          route: '/report-content/create-report-category'
        },
        {
          label: 'List Report Category',
          key: 'list-report-category',
          route: '/report-content/list-report-category'
        }
      ]
    },
    {
      key: 'studio',
      label: 'Studios',
      icon: <WalletOutlined />,
      children: [
        {
          label: 'List Studios',
          key: 'studios-listing',
          route: '/studios'
        },
        {
          label: 'Pending Studios',
          key: 'pending-studios',
          route: '/studios?status=pending'
        },
        {
          label: 'Create',
          key: 'studios-create',
          route: '/studios/create'
        }
      ]
    },
    {
      key: 'accounts',
      label: 'Users',
      icon: <UserOutlined />,
      children: [
        {
          label: 'User list',
          key: 'users',
          route: '/users'
        },
        {
          label: 'Create',
          key: 'users-create',
          route: '/users/create'
        }
      ]
    },
    {
      key: 'performer',
      label: 'Performers',
      icon: <WomanOutlined />,
      children: [
        {
          label: 'Current categories',
          key: 'performer-categories',
          route: '/performer/category'
        },
        {
          label: 'All Performers',
          key: 'performers',
          route: '/performer'
        },
        {
          label: 'Online Performers',
          key: 'online-performers',
          route: '/performer/online'
        },
        {
          label: 'Pending Performers',
          key: 'pending-performers',
          route: '/performer?status=pending'
        },
        {
          label: 'Create New',
          key: 'create-performers',
          route: '/performer/create'
        }
      ]
    },
    {
      key: 'performers-photos',
      label: 'Photos',
      icon: <CameraOutlined />,
      children: [
        {
          key: 'photo-listing',
          label: 'Photos',
          route: '/photos'
        },
        {
          label: 'Upload',
          key: 'upload-photo',
          route: '/photos/upload'
        },
        {
          label: 'Bulk Upload',
          key: 'bulk-upload-photo',
          route: '/photos/bulk-upload'
        },
        {
          key: 'gallery-listing',
          label: 'Existing galleries',
          route: '/gallery'
        },
        {
          label: 'Create galleries',
          key: 'create-galleries',
          route: '/gallery/create'
        }
      ]
    },
    {
      key: 'performers-products',
      label: 'Products',
      icon: <SkinOutlined />,
      children: [
        {
          key: 'product-listing',
          label: 'Inventory',
          route: '/product'
        },
        {
          label: 'Create',
          key: 'create-product',
          route: '/product/create'
        }
      ]
    },
    {
      key: 'videos',
      label: 'Videos',
      icon: <VideoCameraOutlined />,
      children: [
        {
          key: 'video-listing',
          label: 'Existing videos',
          route: '/video'
        },
        {
          key: 'video-upload',
          label: 'Upload',
          route: '/video/upload'
        }
      ]
    },
    {
      key: 'tokens',
      label: 'Token Packages',
      icon: <BankOutlined />,
      children: [
        {
          key: 'token-listing',
          label: 'Token Packages',
          route: '/token-package'
        },
        {
          key: 'create-token',
          label: 'Create',
          route: '/token-package/create'
        }
      ]
    },
    {
      key: 'earning',
      label: 'Earnings log',
      icon: <DollarOutlined />,
      children: [
        {
          key: 'earning-listing-performer',
          label: 'Performer Earnings',
          route: '/earning/performers'
        },
        {
          key: 'earning-listing-studio',
          label: 'Studio Earnings',
          route: '/earning/studios'
        }
      ]
    },
    {
      key: 'i18n',
      label: 'Multilingual',
      icon: <ProfileOutlined />,
      children: [
        {
          label: 'List text',
          key: 'i18n-listing',
          route: '/i18n'
        },
        {
          label: 'New text',
          key: 'create-i18n',
          route: '/i18n/create'
        },
        {
          label: 'Import text',
          key: 'import-i18n',
          route: '/i18n/import'
        }
      ]
    },
    {
      key: 'payments',
      label: 'Payments',
      icon: <DollarOutlined />,
      children: [
        {
          key: 'paymentslist',
          label: 'Payments',
          icon: <DollarOutlined />,
          route: '/payment'
        },
        {
          key: 'payment-information',
          label: 'Payment Informations',
          icon: <BankFilled />,
          route: '/payment-information'
        }
      ]
    },
    {
      key: 'order',
      label: 'Order history',
      icon: <OrderedListOutlined />,
      children: [
        {
          key: 'order-listing',
          label: 'Orders Managment',
          route: '/order'
        }
      ]
    },
    {
      key: 'payout',
      label: 'Payout requests',
      icon: <MenuUnfoldOutlined />,
      children: [
        {
          key: 'payout-listing-performer',
          label: 'Performer Requests',
          route: '/payout-request'
        },
        {
          key: 'payout-listing-studio',
          label: 'Studio Requests',
          route: '/payout-request/studios'
        }
      ]
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <PieChartOutlined />,
      children: [
        {
          key: 'system-settings',
          route: '/settings',
          as: '/settings',
          label: 'System settings'
        },
        {
          label: 'Account settings',
          key: 'account-settings',
          route: '/account/settings'
        }
      ]
    }
  ];

  const siderProps = {
    openPopup,
    menus: sliderMenus,
    closePopup
  };

  

  return (
    <Layout.Header className={`${styles.header}`} id="layoutHeader">
      <div className={`${styles['left-container']}`}>
        <Image
          src="/admin.png"
          alt="logo"
          width={150}
          height={60}
          className={styles.logo}
        />
      </div>

      <div className={`${styles['right-content']}`}>
        <Image
          src="/admin-avatar.jpg"
          alt="logo"
          width={40}
          height={40}
          className={styles['admin-avatar']}
          onClick={() => setOpenPopup(!openPopup)}
        />
      </div>
      <Sider {...siderProps} />
    </Layout.Header>
  );
}

export default Header;
