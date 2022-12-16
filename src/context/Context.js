import { createContext, useContext, useReducer } from "react";
import {cartReducer, productReducer} from './Reducers';
import bakeryData from './assets/bakery-data.json';


  const Cart = createContext();
  const Context = ({children}) => {
    const products = bakeryData.map((item, index)=> ({
      id: index,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      fastDelivery: item.fastDelivery,
      inStock: item.inStock,
      isPastry: item.isPastry,
      isCake: item.isCake,
      isBread : item.isBread,
      isDrink: item.isDrink,
      isDairy: item.isDairyFree,
      isNut: item.isNutFree,
      calories: item.calories,
    
    }))
    console.log(products)


    const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: [],
    });
    
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        searchQuery: "",
        byPastry: false,
        byCake: false,
        byBread: false,
        byDrink: false,
        byDairyFree: false,
        byNutFree: false,
      });
    
 
    console.log(products);
    return( 
    <Cart.Provider value = {{state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
    );
  };


export const CartState = () => {
    return useContext(Cart)
};

export default Context;






