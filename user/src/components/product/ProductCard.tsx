import { Button, Rate, Tooltip } from 'antd';
import { IProduct } from '../../interfaces/product';
import s from './product-card.module.scss';

interface Props {
	product: IProduct;
}

const ProductCard = ({ product }: Props) => {
	return (
		<div className={s['product-card']}>

			<div className={s['section-image']}>
				<img src={product.image} alt="" />
			</div>

			<p className={s['product-title']}>
				<Tooltip title={product.title}>{product.title}</Tooltip>
			</p>

			<p className={s['product-description']}>
				<Tooltip title={product.description}>{product.description}</Tooltip>
			</p>

			<div className={s['product-rating']}>
				<Rate
					value={product.rating.rate || 0}
					className={s['product-rate']}
					onChange={() => {}}
				/>
				<p className={s['product-price']}>{product.price || 0}</p>
			</div>
			
			<div className={s['btn-add-product']}>
				<Button
					type="primary"
					onClick={() => {}}
				>
					Add To Cart
				</Button>
			</div>
		</div>
	);
}

export default ProductCard;