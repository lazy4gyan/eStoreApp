import { BASEURL } from "../utils/constants";

function getElectronics() {
    return fetch(`${BASEURL}/products/category/electronics`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
  
  export default getElectronics;