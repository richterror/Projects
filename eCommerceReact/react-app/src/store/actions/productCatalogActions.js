import actiontypes from "../actiontypes";
import axios from "axios"; //går bra att använda Fetch istället

//returnerar en asyncfunction som 'get' produkterna från api:t
export const getProductCatalog = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:9999/api/products");
    dispatch(setProducts(res.data));
  };
};

export const setProducts = (products) => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products,
  };
};

// Bara en produkt via ID

export const getProductById = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:9999/api/products/${id}`);
    dispatch(setOneProduct(res.data));
  };
};

export const setOneProduct = (product) => {
  return {
    type: actiontypes().product.set,
    payload: product,
  };
};

export const clearProduct = () => {
  return { type: actiontypes().product.clear };
};
