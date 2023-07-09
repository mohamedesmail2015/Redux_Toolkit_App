import React from "react";
import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../RTK/slices/cartSlice";

function Cart() {
  const { cart } = useSelector((state) => state);
  // console.log(cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Container className="py-5 my-3">
      <h1>Welcome To Cart</h1>
      <Button variant="primary" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <p className="my-3">Total Price {totalPrice.toFixed(3)} $ </p>
      <Table className="my-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image className="card-img" src={product.image} />
              </td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
