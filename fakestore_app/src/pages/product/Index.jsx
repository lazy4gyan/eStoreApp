import NavbarComponent from '../../components/navbar-component/Index'
import Products from '../../components/products/Index'
import Footer from "../../components/footer/Index";

const ProductPage = () => {
  return (
    <section>
      <NavbarComponent/>
      <div style={{padding:"2rem"}}>
      <Products/>
      </div>
      <Footer />
    </section>
  )
}

export default ProductPage
