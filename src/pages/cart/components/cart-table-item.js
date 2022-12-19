function CartTableItem(props) {
  const onQuantityChange = (event) => {
    console.log("e", event.target.value);
  };
  return (
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
              onChange={(event) => onQuantityChange(event.target.value)}
              type="number"
              className="input-text qty text"
              step="1"
              min="1"
              max="10"
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
        <button className="btn-close">
          <i className="fa fa-times-circle-o"></i>
        </button>
      </th>
    </tr>
  );
}

export default CartTableItem;
