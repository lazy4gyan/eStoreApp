import React, { useContext } from "react";
import CarouselComponent from "../../components/carousel-component/Index";
import CategoryComponent from "../../components/category-component/Index";
import NavbarComponent from "../../components/navbar-component/Index";
import ProductList from "../../components/productlist-component/Index";
import { GlobalContext } from "../../provider/Index";
import Footer from "../../components/footer/Index";
import Products from "../../components/products/Index";
import "./style.css";

const Home = () => {
  const globalStore = useContext(GlobalContext);
  const categoryList = globalStore.productCategories.slice(0, 2);
  const selectedProduct = globalStore.filteredData;
  return (
    <article>
      <NavbarComponent />
      {globalStore.isLoading ?
      (
        <section className="loading--container">
          <p className="loading">Loading...</p>
        </section>
      ) : 
      globalStore.errorMessage ?
      (
        <section>
          <p style={{color:"red", fontSize:35,display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
            {globalStore.errorMessage}
          </p>
        </section>
      ):(
        <>
          <CategoryComponent />
          {selectedProduct.length > 0 ? (
            <Products selectedProduct={selectedProduct} />
          ) : (
            <>
              <CarouselComponent />
              {categoryList.length > 0 ? (
                categoryList.map((category) => {
                  return (
                    <section key={category} className="category--list">
                      <h2 className="category--heading">{category}</h2>
                      <ProductList category={category} />
                    </section>
                  );
                })
              ) : (
                <section className="loading--container">
                  <p className="loading">Loading...</p>
                </section>
              )}
            </>
          )}
        </>
      )}
      <Footer />
    </article>
  );
};

export default Home;
