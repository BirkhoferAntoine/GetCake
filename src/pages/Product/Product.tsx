import { type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/products.context.tsx';
import { Box, Container, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ProductProps = {};

const sxStyles = {

}

const Product: FC<ProductProps> = ({}) => {
    const params = useParams<{ id: string }>();
    const { isLoading, error, data } = useProductsContext();
    let errorMessage;
    let loadedProduct;
    if (params.id && !isLoading) {
        loadedProduct = data.find(product => product.id === +params.id);
    } else if (!params.id) {
        errorMessage = 'Erreur veuillez renseigner l\'id du produit';
    } else if (error) {
        errorMessage = 'Erreur veuillez réessayer ultérieurement';
    }

    return (
        <main>
            <Container>
                <Paper>
                    {
                        isLoading && <Typography>Loading...</Typography> ||
                        errorMessage && <Typography>Error while fetching data</Typography> ||
                        loadedProduct && (
                            <Box>
                                <Link to={'/'}><ArrowBackIcon/>Go back</Link>
                                <Typography>{loadedProduct.title}</Typography>
                                <Typography>{loadedProduct.rating}/5 from {loadedProduct.ratingCount} reviews</Typography>
                                <img src={'../public/'+loadedProduct.image} />
                                <Typography>{loadedProduct.description}</Typography>
                                <Typography>{loadedProduct.price}€</Typography>
                            </Box>
                        )
                    }
                </Paper>
            </Container>
        </main>
    );
};

export default Product;