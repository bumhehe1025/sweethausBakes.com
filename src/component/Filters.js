import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: {byFastDelivery, sort, byDairyFree, byNutFree, byBread, byCake, byPastry, byDrink},
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title title-1 text-center">Sort Products</span>
      <span>
        <Form.Check
          className = 'component-button-1'
          label="Lowest Price"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
        className = 'component-button-1'
          label="Highest Price"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
    
      <span className="title text-center">Types</span>
      <span>
        <Form.Check
         className = 'component-button-2'
          label="Bread"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BREAD",
            })
          }
          checked={byBread}
        />
      </span>
      <span>
        <Form.Check
          className = 'component-button-2'
          label="Cake"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_CAKE",
            })
          }
          checked={byCake}
        />
      </span>
      <span>
        <Form.Check
          className = 'component-button-2'
          label="Pastry"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PASTRY",
            })
          }
          checked={byPastry}
        />
      </span>
      <span>
        <Form.Check
          className = 'component-button-2'
          label="Drink"
          name="group1"
          type="checkbox"
          id={`inline-6`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DRINK",
            })
          }
          checked={byDrink}
        />
      </span>
    <span className="title text-center">Dietary Restrictions</span>
      <span>
        <Form.Check
          className = 'component-button-3'
          label="Gluten Free"
          name="group1"
          type="checkbox"
          id={`inline-7`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <Form.Check
          className = 'component-button-3'
          label="Dairy Free"
          name="group1"
          type="checkbox"
          id={`inline-8`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DAIRY",
            })
          }
          checked={byDairyFree}
        />
      </span>
      <span>
        <Form.Check
          className = 'component-button-3'
          label="Nut Free"
          name="group1"
          type="checkbox"
          id={`inline-9`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_NUT",
            })
          }
          checked={byNutFree}
        />
      </span>
    
    
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;