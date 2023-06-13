import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import NextPreProduct from "./NextPreProduct";
import TimeCountDown from "./ProductSaleCountDown/TimeCountDown";
import { newArrProduct } from "../../data/dataImage";

import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";

function CountDownProduct ( listProduct ) {

    const newListProduct = useSelector((state) => state.product.product);
    const newArrProduct = lastResult('code', newListProduct)

    const PerViewDetail = [2,3,4,4];
    return (
        <>
            <Grid 
                sx={{
                    display: 'flex',
                    alignIterm: 'center',
                    textAlign: 'center',
                    mx: 5,
                    mt: 5,
                    width: 'calc(100% - 80px)',
                    height: 'auto'
                }}
                 spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 'container'}}
            >
                <TimeCountDown/>
            </Grid>
            <div className="res">
                <Grid sx={{
                        display: 'flex',
                        alignIterm: 'center',
                        textAlign: 'center',
                        mt: 5,
                        py: 4,
                        width: '100%',
                        maxHeight: '100%',
                    }}>
                    <NextPreProduct products={newArrProduct} PerView={PerViewDetail} progressbuy={true} />
                </Grid>
            </div>
        </>
    )
}

export default CountDownProduct;