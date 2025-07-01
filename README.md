#Sequence of lessons

## 9 Passing Children
How can you create a component that can accept children?
Steps:
 - create a new component named Alert.tsx
 - to display an alert we get some code from bootstrap
 - under DOCS we should find alerts   https://getbootstrap.com/docs/5.3/components/alerts/
 - we can pass children to a component

## 8 State vs Props

state

- refers to the data managed by the component
- are similar to local variable and they can be changed

props

- input passed to a component
- similar to function arguments
- not changeable, read only

## 7 Passing Functions via Props

Something should happen after an item is selected; the user is directed to another page, etc

## 6 Passing Data via Props

How can we make a component reusable? Props, they are inputs to our components

## 5 Managing state

- we tell React that state of a component will change over time
- each component will have its own state
- when we click on an item we want to have it highlighted. Use a bootstrap css class called active
- To highlight one item at a time, we need a variable to keep track of the index of the selected item
- render the content dynamically {} instead of attaching the class to the list item
- update the event based on the click using the arrow function

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

## 0 Install prettier extension to format code every time you save your file

Step 1: Install Prettier Extension

- Open VSCode.
- Go to the Extensions view (you can press Ctrl+Shift+X or Cmd+Shift+X on macOS).
- In the search bar, type Prettier - Code formatter.
- Click Install on the one by Prettier (by "Prettier").

Step 2:

- Set Prettier as the Default Formatter
- Open the Command Palette: Ctrl+Shift+P (or Cmd+Shift+P on macOS).
- Type and select Preferences: Open Settings (UI).
- In the search bar at the top, search for default formatter.
- From the dropdown, select esbenp.prettier-vscode.

Step 3: Enable Format on Save (Recommended)

- In the same Settings UI, search for format on save.
- Check the box for Editor: Format On Save.
- This will automatically format your file every time you save it.
