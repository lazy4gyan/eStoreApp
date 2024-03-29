import React, { createContext, useState, useEffect } from "react";
import getAllCategories from "../services/getAllCategories";
import getAllProducts from "../services/getAllProducts";
import getElectronics from "../services/getElectronics";
import getJweleries from "../services/getJwelery";

export const GlobalContext = createContext({});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const GlobalProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [jweleryData, setJweleryData] = useState([]);
  const [electronicsData, setElectronicsData] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCategory, setShowCategory] = useState("");
  const [checkHome, setCheckHome] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [
          getProducts,
          getJweleryList,
          getElectronicsList,
          getProductCategories,
        ] = await Promise.all([
          getAllProducts(),
          getElectronics(),
          getJweleries(),
          getAllCategories(),
        ]);
        setProductData(getProducts);
        setJweleryData(getJweleryList);
        setElectronicsData(getElectronicsList);
        setProductCategories(getProductCategories);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchResult = productData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchedText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchedText.toLowerCase())
  );

  const filteredData =
    !checkHome &&
    productData.filter((product) => {
      return product.category === showCategory;
    });

  const addToCartHandler = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }
    setCart((cart) => [...cart, { ...item, amount: 1 }]);
  };

  const handleCartChange = (id, x) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.id === id
          ? cartItem.amount + x < 1
            ? []
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + x,
                },
              ]
          : [cartItem]
      )
    );
  };

  const handleCartItemDelete = (id) => {
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
  };


  return (
    <GlobalContext.Provider
      value={{
        cart,
        productData,
        jweleryData,
        electronicsData,
        productCategories,
        showCategory,
        setShowCategory,
        windowDimensions,
        addToCartHandler,
        handleCartChange,
        handleCartItemDelete,
        setSearchedText,
        errorMessage,
        searchResult,
        filteredData,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
