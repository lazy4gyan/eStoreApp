import { BASEURL } from "../utils/constants";

function getAllProducts() {
    return fetch(`${BASEURL}/products`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
  
  export default getAllProducts;