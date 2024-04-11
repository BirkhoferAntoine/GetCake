import { type FC } from 'react';
import { ProductType } from '../../contexts/products.context.tsx';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from 'react-router-dom';
import { sxStyles } from './ProductItem.styles.ts';

type ProductItemProps = {
    product: ProductType
}



const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <Card sx={sxStyles.cardContainer} elevation={1}>
            <Link to={'/products/'+product.id}>
                <CardMedia
                    component="img"
                    alt="A picture of the product"
                    height="160"
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </Link>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', flexGrow: '1'}}>
                <Typography variant="body2" color="text.secondary">Price: {product.price}€</Typography>
                <Box sx={sxStyles.lowerCardBox}>
                    <Box sx={sxStyles.gradeBox}><GradeIcon/>{product.rating}</Box>
                <CardActions sx={sxStyles.cardContent}>
                    <Button size="small"><FavoriteIcon /></Button>
                    <Button size="small"><ShoppingCartIcon /></Button>
                </CardActions>
                </Box>
            </Box>

        </Card>
    );
};

export default ProductItem;