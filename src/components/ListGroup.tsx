import { useState } from "react";

function ListGroup() {
  let items = ["New York", "London", "Tokyo", "San Francisco"];
  //items = [];//test the empty state
  //if (items.length === 0) return <p>No items found</p>;
  //let selectedIndex = 0; //no items is selected if you set it to -1

  //this function is react specific
  //it is a hook that allows us to use state in a functional component
  //this component will have data that can change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
// now we need to add this in our Aoo.tsx
