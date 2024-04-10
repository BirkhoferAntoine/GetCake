import {Outlet} from "react-router-dom";
import {Header} from "./Header/Header.tsx";
import {styled} from "@mui/material";
const Offset = styled('div')({ minHeight: 'var(--header-height)' });
export const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <Offset/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}