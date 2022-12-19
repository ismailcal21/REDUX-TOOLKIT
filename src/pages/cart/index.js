import { useSelector } from "react-redux";
import CartTableItem from "./components/cart-table-item";

function Cart(props) {
  const cartState = useSelector((state) => state.cartState);

  const cartTableItems = [];
  cartState.items.map((item, index) => {
    cartTableItems.push(<CartTableItem key={index} {...item} />);
  });

  return (
    <div className="space-medium">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">My Cart (02)</h3>
              </div>

              <div className="box-body">
                <div className="table-responsive">
                  <div className="cart">
                    <table className="table table-bordered ">
                      <thead>
                        <tr>
                          <th>
                            <span>Item</span>
                          </th>
                          <th>
                            <span>Price</span>
                          </th>
                          <th>
                            <span>Quantity</span>
                          </th>
                          <th>
                            <span>Total</span>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <CartTableItem />
                        <tr>
                          <td>
                            <a href="#">
                              <img src="/images/cart_product_1.png" alt="" />
                            </a>
                            <span>
                              <a href="#">Google Pixle</a>
                            </span>
                          </td>
                          <td>$1100</td>
                          <td>
                            <div className="product-quantity">
                              <div className="quantity">
                                <input
                                  type="number"
                                  className="input-text qty text"
                                  step="1"
                                  min="1"
                                  max="6"
                                  name="quantity"
                                  defaultValue="1"
                                  title="Qty"
                                  size="4"
                                  pattern="[0-9]*"
                                />
                              </div>
                            </div>
                          </td>
                          <td>$1100.00</td>
                          <th scope="row">
                            <a href="#" className="btn-close">
                              <i className="fa fa-times-circle-o"></i>
                            </a>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              <img src="/images/cart_product_2.png" alt="" />
                            </a>
                            <span>
                              <a href="#">Apple iPhone 6S </a>
                            </span>
                          </td>
                          <td>$1300</td>
                          <td>
                            <div className="product-quantity">
                              <div className="quantity">
                                <input
                                  type="number"
                                  className="input-text qty text "
                                  step="1"
                                  min="1"
                                  max="6"
                                  name="quantity"
                                  defaultValue="1"
                                  title="Qty"
                                  size="4"
                                  pattern="[0-9]*"
                                />
                              </div>
                            </div>
                          </td>
                          <td>$1300.00</td>
                          <th scope="row">
                            <a href="#" className="btn-close">
                              <i className="fa fa-times-circle-o"></i>
                            </a>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn-link">
              <i className="fa fa-angle-left"></i> back to shopping
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box mb30">
              <div className="box-head">
                <h3 className="head-title">Price Details</h3>
              </div>
              <div className="box-body">
                <div className=" table-responsive">
                  <div className="pay-amount ">
                    <table className="table mb20">
                      <tbody>
                        <tr>
                          <th>
                            <span>Price (2 items)</span>
                          </th>
                          <td>$2400</td>
                        </tr>
                        <tr>
                          <th>
                            <span>Delivery Charges</span>
                          </th>
                          <td>
                            <strong className="text-green">Free</strong>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th>
                            <span className="mb0" style={{ fontWeight: "700" }}>
                              Amount Payable
                            </span>
                          </th>
                          <td style={{ fontWeight: "700", color: "#1c1e1e" }}>
                            $2400
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="btn btn-primary btn-block">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
