import { Grid } from '@material-ui/core';
import Product from '../Product/Product';

const products = [
	{ id: 1, name: 'shoes', description: 'running shoes', price: '$5', image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' },
	{ id: 2, name: 'macbook', description: 'Apple MacBook', price: '$10', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*' },
];

const Products = () => {
	return (
		<main>
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
