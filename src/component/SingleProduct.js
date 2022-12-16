import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products text-center">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title className = "subtitle text-center">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
          <br></br>
          <span className = "description text-center">{prod.description}</span>
          <br></br>
          <br></br>
            <span className = ""> calories: {prod.calories}</span>
            <br></br>
            <span className = ""> price: ${prod.price}</span>
            
            {prod.fastDelivery}
            {prod.isPastry}
            {prod.isCake}
            {prod.isBread}
            {prod.isDrink}
            {prod.isDairy}
            {prod.isNut}
      
          <br></br>
          <br></br>

          </Card.Subtitle>
          <div className = 'text-center'>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              className = ""
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              className = "button btn-outline-light"
              color = "#fff5f5 !important"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              <div className = "add-color"> Add to Cart</div>
            </Button>
          )}
        </div>
        </Card.Body>
      </Card>

    </div>
  );
};

export default SingleProduct;