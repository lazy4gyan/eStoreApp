import { BASEURL } from "../utils/constants";

function getAllCategories() {
    return fetch(`${BASEURL}/products/categories`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
  
  export default getAllCategories;