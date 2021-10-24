

import axios from "axios";

const BACE_URL = "https://fakestoreapi.com"

const getProducts = async () => {
    const response = await axios.get(`${BACE_URL}/products`) 
    return response.data;
}

export {getProducts};