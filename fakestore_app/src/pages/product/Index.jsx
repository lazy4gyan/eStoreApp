import NavbarComponent from "../../components/navbar-component/Index";
import Products from "../../components/products/Index";
import Footer from "../../components/footer/Index";
import Searchbar from "../../components/searcbar-component/Index";
import { GlobalContext } from "../../provider/Index";
import { useContext } from "react";
import "./style.css"

const ProductPage = () => {
  const globalStore = useContext(GlobalContext);

  return (
    <section>
      <NavbarComponent />
      {globalStore.isLoading ? (
        <section className="loading--container">
          <p className="loading">Loading...</p>
        </section>
      ) : globalStore.errorMessage ? (
        <section>
          <p
            style={{
              color: "red",
              fontSize: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            {globalStore.errorMessage}
          </p>
        </section>
      ) : (
        <>
          <section style={{ textAlign: "center" }}>
            <Searchbar />
          </section>
          <div style={{ padding: "2rem" }}>
            <Products />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default ProductPage;
