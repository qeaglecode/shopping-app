import {
  AreaChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { statsService } from '@services/stats.service';
import {
  Card, Col, Row, Statistic
} from 'antd';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './dashboard.module.scss';

interface D {
  route: string;
  asPath: string;
  title: string;
  valueStyle: React.StyleHTMLAttributes<any>;
  prefix: any;
  query: Record<string, any>;
}

const initialData: Record<string, D> = {
  totalActiveUsers: {
    route: '/users',
    asPath: '/users?status=active',
    title: 'ACTIVE USERS',
    valueStyle: { color: '#ffc107' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'active' }
  },
  totalInactiveUsers: {
    route: '/users',
    asPath: '/users?status=inactive',
    title: 'INACTIVE USERS',
    valueStyle: { color: '#ffc107' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'inactive' }
  },
  totalPendingUsers: {
    route: '/users',
    asPath: '/users?status=pending',
    title: 'PENDING USERS',
    valueStyle: { color: '#ffc107' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'pending' }
  },
  totalActivePerformers: {
    route: '/performer',
    asPath: '/performer?status=active',
    title: 'ACTIVE PERFORMERS',
    valueStyle: { color: '#009688' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'active' }
  },
  totalInactivePerformers: {
    route: '/performer',
    asPath: '/performer?status=inactive',
    title: 'INACTIVE PERFORMERS',
    valueStyle: { color: '#009688' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'inactive' }
  },
  totalPendingPerformers: {
    route: '/performer',
    asPath: '/performer?status=pending',
    title: 'PENDING PERFORMERS',
    valueStyle: { color: '#009688' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'pending' }
  },
  totalActiveStudio: {
    route: '/studios',
    asPath: '/studios?status=active',
    title: 'ACTIVE STUDIO',
    valueStyle: { color: '#ff66b3' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'active' }
  },
  totalInactiveStudio: {
    route: '/studios',
    asPath: '/studios?status=inactive',
    title: 'INACTIVE STUDIO',
    valueStyle: { color: '#ff66b3' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'inactive' }
  },
  totalPendingStudio: {
    route: '/studios',
    asPath: '/studios?status=pending',
    title: 'PENDING STUDIO',
    valueStyle: { color: '#ff66b3' },
    prefix: <LineChartOutlined rev={undefined} />,
    query: { status: 'pending' }
  },
  totalGalleries: {
    route: '/gallery',
    asPath: '/gallery',
    title: 'GALLERIES',
    valueStyle: { color: '#5399d0' },
    prefix: <PieChartOutlined rev={undefined} />,
    query: {}
  },
  totalPhotos: {
    route: '/photos',
    asPath: '/photos',
    title: 'PHOTOS',
    valueStyle: { color: '#5399d0' },
    prefix: <PieChartOutlined rev={undefined} />,
    query: {}
  },
  totalVideos: {
    route: '/video',
    asPath: '/video',
    title: 'VIDEOS',
    valueStyle: { color: '#5399d0' },
    prefix: <DotChartOutlined rev={undefined} />,
    query: {}
  },
  totalProducts: {
    route: '/product',
    asPath: '/product',
    title: 'PRODUCTS',
    valueStyle: { color: '#5399d0' },
    prefix: <PieChartOutlined rev={undefined} />,
    query: {}
  },
  totalDeliverdOrders: {
    route: '/order',
    asPath: '/order?deliveryStatus=delivered',
    title: 'DELIVERED ORDERS',
    valueStyle: { color: '#c8d841' },
    prefix: <AreaChartOutlined rev={undefined} />,
    query: { deliveryStatus: 'delivered' }
  },
  totalShippingdOrders: {
    route: '/order',
    asPath: '/order?deliveryStatus=shipping',
    title: 'SHIPPING ORDERS',
    valueStyle: { color: '#c8d841' },
    prefix: <AreaChartOutlined rev={undefined} />,
    query: { deliveryStatus: 'shipping' }
  },
  totalRefundedOrders: {
    route: '/order',
    asPath: '/order?deliveryStatus=refunded',
    title: 'REFUNDED ORDERS',
    valueStyle: { color: '#c8d841' },
    prefix: <AreaChartOutlined rev={undefined} />,
    query: { deliveryStatus: 'refunded' }
  },
  totalGrossPrice: {
    route: '/earning',
    asPath: '/earning',
    title: 'GROSS PROFIT',
    valueStyle: { color: '#fb2b2b' },
    prefix: <DotChartOutlined rev={undefined} />,
    query: {}
  },
  totalNetPrice: {
    route: '/earning',
    asPath: '/earning',
    title: 'NET PROFIT',
    valueStyle: { color: '#fb2b2b' },
    prefix: <DotChartOutlined rev={undefined} />,
    query: {}
  },
  totalStreamTime: {
    route: '/performer',
    asPath: '/performer',
    title: 'STREAM TIMES',
    valueStyle: { color: '#fb2b2b' },
    prefix: <DotChartOutlined rev={undefined} />,
    query: {}
  }
};

export default function Dashboard() {
  const [stats, setStats] = useState<any>({});

  const dashboadStats = async () => {
    const resp = await statsService.dashboardStats();
    setStats(resp.data);
  };

  useEffect(() => {
    dashboadStats();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      

      <Row gutter={24} className="dashboard-stats">
        <Col span={24}>
          <div className={s['site-name']}>
            <Link href="/" legacyBehavior>
              <a>
                <h1>Admin Panel</h1>
              </a>
            </Link>
          </div>
        </Col>
        {stats
          && Object.keys(initialData).map((key) => (
            <Col span={8} key={key}>
              <Link
                href={{
                  pathname: initialData[key].route,
                  query: initialData[key].query
                }}
                as={initialData[key].asPath}
                legacyBehavior
              >
                <a>
                  <Card>
                    <Statistic
                      title={initialData[key].title}
                      value={stats[key] || 0}
                      valueStyle={initialData[key].valueStyle}
                      prefix={initialData[key].prefix}
                    />
                  </Card>
                </a>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
}
