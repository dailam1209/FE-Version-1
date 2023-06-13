import ProfileParent from "../components/commons/InforAcount/Parent";
import Home from "../components/pages/Home";
import Male from "../components/pages/Male";
import ProductBuy from "../components/pages/ProductBuy";

import config from "../config/config";

const publicRouter = [
    {path: config.routers.home, component: Home},
    {path: config.routers.nam, component: Male},
    {path: config.routers.product + "/:id", component: ProductBuy},
    {path: config.routers.account, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.address, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.card, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.wishlist, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.point, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.sale, component: ProfileParent},
    {path: config.routers.profile + "-" + config.routers.cart, component: ProfileParent},


];


const privateRouter = [

];


export { publicRouter, privateRouter} ;