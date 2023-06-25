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
import Loader from '@components/common/base/loader';
import Header from '@components/common/layout/header';
import Sider from '@components/common/layout/sider';
import { BackTop, Layout } from 'antd';
// import { enquireScreen, unenquireScreen } from 'enquire-js';
import { Router } from 'next/router';
import {
  useEffect, useRef, useState
} from 'react';
import { IUIConfig } from '@src/interfaces';

import style from './primary-layout.module.scss';

interface IPrimaryLayout {
  children: any;
  config: IUIConfig;
  loadUIHandler: Function;
  ui: any;
}

function PrimaryLayout({
  children,
  ui
}: IPrimaryLayout) {
  const [routerChange, setRouterChange] = useState(false);
  const [collapsed, setCollapsed] = useState(ui?.collapsed);
  const [openPopup, setOpenPopup] = useState(false);

  const enquireHandler = useRef(null);

  const handleStateChange = () => {
    Router.events.on('routeChangeStart', async () => setRouterChange(true));
    Router.events.on('routeChangeComplete', async () => setRouterChange(false));
  };

  const closePopup = (c: any) => {
    setOpenPopup(false);
  };

  const handleOpenPopup = (val: boolean) => {
    setOpenPopup(val);
  }

  // useEffect(() => {
  //   loadUIHandler();
  //   enquireHandler.current = enquireScreen((mobile: boolean | ((prevState: boolean) => boolean)) => {
  //     if (isMobile !== mobile) {
  //       setIsMobile(mobile);

  //       if (mobile) {
  //         setCollapsed(true);
  //       }
  //     }
  //   });

  //   handleStateChange();

  //   return () => {
  //     unenquireScreen(enquireHandler.current);
  //   };
  // }, []);

  const {
    fixedHeader, logo, siteName, theme
  } = ui || {};

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
    // {
    //   id: 'refund',
    //   name: 'Refund requests',
    //   icon: <ExclamationOutlined />,
    //   children: [
    //     {
    //       id: 'refund-listing',
    //       name: 'Refund Request Managment',
    //       route: '/refund-request'
    //     }
    //   ]
    // },
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
    logo,
    siteName,
    theme,
    menus: sliderMenus,
    closePopup
  };

  return (
    <Layout>
      <div className={style.container} id="primaryLayout">
        <Header
          handleOpenPopup={() => handleOpenPopup}
        />

        <Layout.Content>
          {routerChange && <Loader spinning />}
            {/* <Bread routeList={newRouteList} /> */}
            {children}
          <Sider {...siderProps} />
        </Layout.Content>

        <BackTop className={style.backTop} onClick={() => document.querySelector('#layoutHeader') as any} />
      </div>
    </Layout>
  );
}

export default PrimaryLayout;
