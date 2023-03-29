import React, { useContext } from "react";
import { GlobalContext } from "../../provider/Index";
import { CATEGORIES } from "../../utils/constants";
import "./style.css"

const CategoryComponent = () => {

  const globalStore = useContext(GlobalContext);
  const setShowCategory = globalStore.setShowCategory;
  const windowDimensions = globalStore.windowDimensions;
 
  const renderCategories = () => {
    return CATEGORIES.map((category) => {
      return (
        windowDimensions.width <= "540" ?(
          <div className="category--wrapperOnly" key={category.title} onClick={()=> setShowCategory(category.id)}>
          <h4 className="category--wrapper__nameOnly"  >{category.title}</h4>
        </div>
        ):
        (<div className="category--wrapper" key={category.title} onClick={()=> setShowCategory(category.id)}>
          <img className="category--wrapper__img" src={category.src} alt={category.alt} />
          <h4 className="category--wrapper__name"  >{category.title}</h4>
        </div>)
      );
    });
  };
  return <div className="category--container">{renderCategories()}</div>;
};

export default CategoryComponent;
