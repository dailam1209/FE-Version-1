import axios from "axios";


// get allProduct 
const getAllProduct = async () => {
    try {
        const listProduct = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/allProduct`);
        const products =  listProduct.json();
        return products;
    } catch (err) {
        console.log(err);
    }
};

// get sameProduct With Code
const getSameProducts = async (code) => {
    try {
        const listProduct = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/getSingleSameProduct/${code}`);
        const products =  listProduct.json();
        return products;
    } catch (err) {
        console.log(err);
    }
};

const getAProduct = async (id) => {
    try {
        const product = await  fetch(`https://vercel-nodejs.onrender.com/api/v2/product/singleProduct/${id}`);
        const jsonProduct =  product.json();
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};

const resetProduct = async (id) => {
    try {
        const jsonProduct =  [];
        return jsonProduct;
    } catch (err) {
        console.log(err);
    }
};



const productService = {
    getSameProducts,
    getAProduct,
    getAllProduct,
    resetProduct
};
  
  export default productService;