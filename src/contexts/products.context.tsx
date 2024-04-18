import { createContext, type FC, ReactNode, useContext, useMemo} from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosService from '../services/axiosService.ts';

type ProductsContextProviderProps = {
    children: ReactNode
};

export type ProductType = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    model: string;
    rating: number;
    ratingCount: number;
}

type ProductContextValue = {
    isLoading: boolean;
    error: Error | null;
    data: ProductType[]
}

const ProductsContext = createContext<ProductContextValue | null>(null);

export function useProductsContext() {
    const productsCtx = useContext(ProductsContext);
    if (productsCtx === null) throw new Error('Error, products context is null');
    return productsCtx;
}
const ProductsContextProvider: FC<ProductsContextProviderProps> = ({children}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['products'], queryFn: fetchProducts
    });

    async function fetchProducts(): Promise<ProductType[] | void> {
        try {
            return await axiosService.get('/products');
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }

    const ctx = useMemo(() => ({ isLoading, error, data }), [isLoading, error, data]);
    return (
        <ProductsContext.Provider value={ctx}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;