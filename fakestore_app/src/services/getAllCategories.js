import { BASEURL } from "../utils/constants";

function getAllCategories() {
    return fetch(`${BASEURL}/products/categories`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
  // 'https://fakestoreapi.com/products/category/jewelery
  
  export default getAllCategories;