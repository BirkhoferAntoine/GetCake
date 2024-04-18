import { type FC} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductType, useProductsContext } from '../../contexts/products.context.tsx';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart-slice.ts';
import CakeModel from '../../components/CakeModel.tsx';

const Product: FC = () => {
    const params = useParams<{ id: string }>();
    const { isLoading, error, data } = useProductsContext();
    const dispatch = useDispatch();
    let loadedProduct: ProductType | undefined;

    function handleAddProductToCart() {
        if (loadedProduct) {
            dispatch(addToCart({ id: +loadedProduct.id, title: loadedProduct.title, price: loadedProduct.price }))
        }
    }


// npx gltfjsx@6.2.16 -t C:\Users\abrka\PhpstormProjects\GetCake\src\assets\gltf\chocolate_cake\scene.gltf -o C:\Users\abrka\PhpstormProjects\GetCake\src\components\models\chocolate_cake\ChocolateCakeModel.tsx

    if (params.id && !isLoading) {
        loadedProduct = data.find(product => product.id === +params.id);
    } else if (!params.id) {
        return <Typography>Erreur veuillez renseigner l'id du produit</Typography>
    } else if (error) {
        return <Typography>Error while fetching data</Typography>
    } else if (isLoading) {
        return <Typography>Loading...</Typography>
    }


    if (loadedProduct) return (
        <main>
            <Container>
                <Link to={'/'} style={{display:'flex'}}><ArrowBackIcon />Go back</Link>
                {loadedProduct.model && <CakeModel folder={loadedProduct.model}/>}
                <Box sx={{textAlign:'center'}}><Typography>Click to drag and move around, mousewheel to zoom</Typography></Box>
                <Paper sx={{padding:'1em'}}>
                    <Box sx={{textAlign: 'center', height:'100%'}}>
                        <Typography variant="body1" color="primary.main">{loadedProduct.title}</Typography>
                        <Typography>{loadedProduct.rating}/5 from {loadedProduct.ratingCount} reviews</Typography>
                        <Typography color="text.secondary">{loadedProduct.description}</Typography>
                        <Typography color="text.secondary">{loadedProduct.price}€</Typography>
                        <Button onClick={handleAddProductToCart} variant={'contained'} sx={{color:'white'}}>
                            Get Cake
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </main>
    );
};

export default Product;