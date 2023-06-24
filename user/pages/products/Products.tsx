import { useEffect, useState } from 'react';
import s from './products.module.scss';
import { Col, Row } from 'antd';
import ProductCard from '../../src/components/product/ProductCard';

const Products = () => {
	const [products, setProducts] = useState([]) as any;

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res=> res.json())
			.then(json=> setProducts(json))
	}, []);

	return (
		<div className={s['products-page']}>
			<div className={s['page-title']}>
				<h1>PRODUCTS</h1>
			</div>
			<Row>
			{products && products.map((product: any) => (
				<Col md={6} xs={12} key={product._id}>
					<ProductCard product={product} />
				</Col>
			))}
			</Row>
		</div>
  );
}

export default Products;