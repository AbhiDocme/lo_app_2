import React from "react";

function Demo() {
  return (
    <div>
      <h1>Demo</h1>
      <p>This is a demo page for the react-router-dom library.</p>
      <a href="/">Go to homepage</a>
      <br />
      <a href="/about">Go to about page</a>
      <br />
      <a href="/users/1234567890">
        Go to user profile page with id: 123 4567890
      </a>
      <br />
      <a href="/users?name=John&age=30">
        Go to users list page with name: John and age: 3 0
      </a>
      <br />
      <a href="/users/create">Create new user</a>
      <br />
      <a
        href="/users/1234567890/edit
        "
      >
        Edit user with id: 1234567890
      </a>
      <br />
      <a href="/users/1234567890/delete">Delete user with id: 1234 567890</a>
      <br />
      <a
        href="/users/1234567890/orders
        /1234567890"
      >
        View orders of user with id: 123456789 0
      </a>
      <br />
      <a href="/users/1234567890/orders/new">
        Add order for user with id: 1234567890
      </a>
      <br />
      <a
        href="/users/1234567890/orders
        /1234567890"
      >
        View order with id: 12 34567890
      </a>
      <br />
      <a
        href="/users/1234567890/orders
        /1234567890/edit"
      >
        Edit order with id: 123456789 0
      </a>
      <br />
      <a
        href="/users/1234567890/orders
        /1234567890/delete"
      >
        Delete order with id: 123456789 0
      </a>
      <br />
      <a href="/products">List all products</a>
      <br />
      <a href="/products/1234567890">View product with id: 123456789 0</a>
      <br />
      <a
        href="/products/1234567890/edit
        "
      >
        Edit product with id: 123456789 0
      </a>
      <br />
      <a href="/products/1234567890/delete">
        Delete product with id: 1234 56789 0
      </a>
      <br />
      <a
        href="/products/1234567890/orders
        /1234567890"
      >
        View orders of product with id: 123456789 0
      </a>
      <br />
      <a
        href="/products/1234567890/orders
        /new"
      >
        Add order for product with id: 1234567890
      </a>
      <br />
      <a
        href="/products/1234567890/orders
        /1234567890"
      >
        View order with id: 12 34567890
      </a>
      <br />
      <a
        href="/products/1234567890/orders
        /1234567890/edit"
      >
        Edit order with id 1234567890
      </a>
      <br />
      <a
        href="/products/1234567890/orders
        /1234567890/delete"
      >
        Delete order with id 1234567890
      </a>
      <br />
      <a href="/orders">List all orders</a>
      <br />
      <a href="/orders/1234567890">View order with id: 123456789 0</a>
      <br />
      <a
        href="/orders/1234567890/edit
        "
      >
        Edit order with id: 123456789 0
      </a>
      <br />
      <a
        href="/orders/1234567890/delete
        "
      >
        Delete order with id: 123456789 0
      </a>
      <br />
      <div class="content">
        <h1>Add order for user with id: 123456 7890</h1>
        <form
          action="/users/1234567890/orders
                /new"
          method="post"
        >
          <label for="product_id">Product Id:</label>
          <input
            type="text"
            name="product_id"
            id="product_id
                    "
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="footer"></div>
    </div>
  );
}

export default Demo;
