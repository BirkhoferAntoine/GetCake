import { Box, Paper, Typography } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem.tsx';
import { useProductsContext } from '../../contexts/products.context.tsx';
import { sxStyles } from './ProductList.styles.ts';


const ProductsList = () => {

    const { isLoading, error, data } = useProductsContext();


    return (
        <Paper component={'section'} sx={sxStyles.productListContainer} elevation={4}>
            <Box sx={sxStyles.header}><Typography variant={'h2'} color={'primary.main'}>Our Cakes</Typography></Box>
            {
                isLoading && <Typography>Loading...</Typography> ||
                error && <Typography>Error while fetching data</Typography> ||
                data && (
                    <Box sx={sxStyles.productList}>
                        {data.map(productItem => {
                            return <ProductItem product={productItem} key={'product-item-' + productItem.id} />;
                        })}
                    </Box>)
            }
        </Paper>
    );
};

export default ProductsList;