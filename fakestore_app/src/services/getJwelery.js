import { BASEURL } from "../utils/constants";

function getJweleries() {
    return fetch(`${BASEURL}/products/category/jewelery`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
  
  export default getJweleries;