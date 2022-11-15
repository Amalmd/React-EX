import store from "../store";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-evenly;
`;

function Products() {
  const [storeItems, setStoreItems] = useState(store);

  return (
    <div>
      {/* {console.log(storeItems)} */}
      <h1>Products page</h1>
      <ul>
        {storeItems.map((i) => {
          return (
            <Ul>
              <li key={i.title}>{i.title}</li>
            </Ul>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
