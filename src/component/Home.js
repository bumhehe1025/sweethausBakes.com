import { CartState} from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, sortCalories, byStock, byFastDelivery, searchQuery, byPastry, byCake, byBread, byDrink, byDairyFree, byNutFree},
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (sortCalories) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortCalories === "lth" ? a.calories - b.calories : b.calories - a.calories
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if(byPastry){
      sortedProducts = sortedProducts.filter((prod) => prod.isPastry);
    }

    if(byCake) {
      sortedProducts = sortedProducts.filter((prod) => prod.isCake);
    }

    if(byBread) {
      sortedProducts = sortedProducts.filter((prod) => prod.isBread);
    }

    if(byDrink) {
      sortedProducts = sortedProducts.filter((prod) => prod.isDrink);
    }

    if(byDairyFree) {
      sortedProducts = sortedProducts.filter((prod) => prod.isDairy);
    }

    if(byNutFree) {
      sortedProducts = sortedProducts.filter((prod) => prod.isNut);
    }


    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;