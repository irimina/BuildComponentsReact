function ListGroup(){

let items = ['New York', 'London', 'Tokyo', 'San Francisco'];
items = [];//test the empty state
//if (items.length === 0) return <p>No items found</p>;

    return (
        <>
        <h1>My List</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
              {items.map(item => <li key={item}>{item}</li>)}   
            </ul>
       </>
    )
   
}



export default ListGroup;
// now we need to add this in our Aoo.tsx