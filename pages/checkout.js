import Section from '@/components/Section';
import React from 'react';
import { CartContext } from '@/context/cart';
import { formatPrice } from '@/utils/helpers';

const checkout = () => {
  const { cart, getCartTotal } = React.useContext(CartContext);

  return (
    <Section>
      <h2>Checkout Page</h2>
      <div class="row">
        <div class="col-md-6">
          <h3>Billing Details</h3>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="first_name">First Name</label>
                <input type="text" class="form-control" id="first_name" />
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Last Name</label>
                <input type="text" class="form-control" id="last_name" />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="discord">Discord Username</label>
              <input type="text" class="form-control" id="discord" />
            </div>
            <div class="form-group">
              <label for="address">Street Address</label>
              <input type="text" class="form-control" id="address" />
            </div>
            <div class="form-group">
              <label for="town">Town/City</label>
              <input type="text" class="form-control" id="town" />
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" class="form-control" id="state" />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" class="form-control" id="country" />
            </div>
            <div class="form-group">
              <label for="email">Postcode/ZIP</label>
              <input type="text" class="form-control" id="postcode" />
            </div>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                I have read and agree to the website terms and conditions *
              </label>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <h3>Your Order</h3>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr>
                  <th scope="row">{item.title}</th>
                  <td>{formatPrice(item.price)}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">Total</th>
                <td>{getCartTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default checkout;
