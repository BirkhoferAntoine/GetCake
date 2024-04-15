import { type FC, Suspense, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductType, useProductsContext } from '../../contexts/products.context.tsx';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart-slice.ts';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ChocolateCakeModel } from '../../components/models/chocolate_cake/ChocolateCakeModel.tsx';
import { SceneDebugger } from '../../components/SceneDebugger.tsx';

const FallBackComponent = () => <div>Loading...</div>;
const Product: FC = () => {
    const params = useParams<{ id: string }>();
    const { isLoading, error, data } = useProductsContext();
    const dispatch = useDispatch();
    const canvasRef = useRef(null);
    let errorMessage;
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
                                <Link to={'/'}><ArrowBackIcon />Go back</Link>
                                <Typography>{loadedProduct.title}</Typography>
                                <Typography>{loadedProduct.rating}/5 from {loadedProduct.ratingCount} reviews</Typography>
                                <Suspense fallback={<FallBackComponent />}>
                                    <Canvas shadows style={{ width: '50vw', height: '50vh' }} ref={canvasRef}
                                            camera={{
                                                position: [1,0,1],
                                                rotation: [0,0,0],
                                                fov: 25,
                                                aspect: 1,
                                                near: 0.1000,
                                                far: 1000.0000,
                                                zoom: 1.0000,
                                                focus: 10.0000
                                            }}>
                                        <pointLight position={[0, 20, 10]} intensity={1.5} />
                                        <ChocolateCakeModel />
                                        <Environment preset="city" blur />
                                        <OrbitControls />
                                        <SceneDebugger/>
                                    </Canvas>
                                </Suspense>
                                <Typography>{loadedProduct.description}</Typography>
                                <Typography>{loadedProduct.price}€</Typography>
                                <Button onClick={handleAddProductToCart} variant={'contained'}>Get Cake</Button>
                            </Box>
                        )
                    }
                </Paper>
            </Container>
        </main>
    );
};

export default Product;