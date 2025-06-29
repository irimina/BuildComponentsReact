#Sequence of lessons

## 4 Handing Events

- apply a Bootstrap class to the list -` <li className="list-group-item" key={item}>{item}</li>`
- we will click on each item and see the output in the console using onClick()
  - `<li className="list-group-item" key={item} onClick = {() => console.log("clicked")} >{item}</li>`

## 3 Conditional Rendering

1. We render contents based on certain conditions

## 2 Render lists

1. We cannot use a regular for loop to iterate over the items
   In js, arrays have a map() to map/convert items to a different item type
2. Whem remderimg a list of items using the map method we should give each item a unique key
3. here is the example with the items array - work is done in ListGroup component

## 1 Wrap multiple elements in a function to diplay on the page

1. Use fragments <> </> to wrap multiple HTML elements in a function that is part of the component named ListGroup.tsx
