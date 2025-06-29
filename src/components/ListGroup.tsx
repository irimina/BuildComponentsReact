function ListGroup(){

// set up a demmo arry

const items = ['New York', 'London', 'Tokyo', 'San Francisco'];

//take each item and convert it to an item of a different type, in this case a list
//item that includes the item itself
//we use {} to render data dynamically in JSX
// in JSX we can only use HTML element or other React components 
// we are adding a ley prop ( property) for each item in this cose the item itself

    return (
        <>
        <h1>List Group Heading</h1>
            <ul className="list-group">
              {items.map(item => <li key={item}>{item}</li>)}   
            </ul>
       </>
    )
   
}

export default ListGroup;
// now we need to add this in our Aoo.tsx