import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['khan of the sakib', 'Fighter Rubel','Alomgir Sabana', 'Vodrho pola Dipjol', 'salmanSha']
  const products =[
    {type: 'pen', price: '$2', color: 'black', made: 'Bangladesh'},

   { type: 'pen', price: '$2', color: 'Red', made: 'Bangladesh'},

   {type: 'pen', price: '$2', color: 'blue', made: 'Bangladesh'},
   {type: 'Marker Pen', price: '$2', color: 'blue', made: 'Bangladesh'}
]
  
  const productNames = products.map(product => product.type)
  console.log(productNames); 
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
     <h1>List</h1>
     <ul>
       {
         nayoks.map(nayok => <li>{nayok}</li>)
       }
       {
         products.map(product => <li>{product.type}</li>)
       }
       {/* <li>{nayoks[2]}</li>
       <li>{nayoks[3]}</li>
       <li>{nayoks[0]}</li>
       <li>{nayoks[4]}</li> <<== bug */}
       
     </ul>

        {/* <YourGrocery name="T-Shirt" price ="$19"></YourGrocery>
        <YourGrocery name="Gamcha" price ="$5"></YourGrocery> */}
          
          {
            products.map(product => <YourGrocery productT ={product}>{product}</YourGrocery>)
          }

        {/* <YourGrocery product ={products[1]}></YourGrocery>
        <YourGrocery product ={products[0]}></YourGrocery>
        <YourGrocery product ={products[2]}></YourGrocery>
        <YourGrocery product ={products[3]}></YourGrocery> */}



       <p>My first react emmet Paragraph</p>
       <Person name ="Rubel Khan" Nayka ="musumi"></Person>
       <Person name={nayoks.[3]}></Person>
       <Person name={nayoks.[2]}></Person>
       <Person name={nayoks.[0]}></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    // console.log('Calling Effect')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    //  .then(jsonData => console.log(jsonData));
    .then(jsonData => setUsers(jsonData));
  }, [])

 return(
   <div>
     <h3>Dynamic Data: {users.length}</h3>
     <ol>
       {
         users.map(user => <li>Name: {user.name} Email: {user.email}</li>)
       }
     </ol>
     {/* {
       console.log(users)
     } */}
   </div>
 )
}

function Counter(){
  const [count, setCount] = useState(1);
  const handleIncrease= () =>  setCount(count + 1);
  // {
  //   // console.log('clicked');
  //   // const newCount = count+1;
  //   // setCount(newCount);
  //   setCount(count + 1);

  // }
  
  return (<div>
    <h1>Count: {count}</h1>
    <button onClick ={handleIncrease}>Increase</button>
    <button onClick ={ () => setCount(count -1)}>Decrease</button>
    <button onMouseMove ={ () => setCount(count*2)}>Test</button>
  </div>
    )
}

function YourGrocery(props){
  const style ={
     margin: '2rem auto',
     padding: '1rem',
     boxShadow:'1rem 1rem 4rem gray',
     borderRadius:'1rem',
     backgroundColor: 'red',
     display: 'grid',
     float:'left',
     justifyContent: 'center',
     gridTemplatesColumn: 'repeat(3, 1fr)'

  }
  const {type, price, color, made} =props.productT;
  return (<section style={style}>
    {/* <div>
    // lightGray
    <h2>Name: {props.name}</h2>
    <h1>Price: {props.price}</h1>
    <button>Buy Now</button>
  </div> */}
  {/* <div>
    <h1>Type: {props.product.type}</h1>
    <h1>Price: {props.product.price}</h1>
    <p>Made in {props.product.made}</p>
    <button>Buy Now</button>
  </div> */}

<div>
    <h1>Type: {type}</h1>
    <h1>Price: {price}</h1>
    <p>Color: {color}</p>
    <p>Made in {made}</p>
    <button>Buy Now</button>
  </div>

  </section>)
}
function Person(props){

  // const outerStyle ={
  //   backgroundColor: 'red', border: '1rem solid yellow', borderRadius: '2rem', boxShadow: '1rem 1rem 4rem gray', margin: '4rem'
  // }
  console.log(props);
  return(<div style ={{backgroundColor: 'red', border: '1rem solid yellow', borderRadius: '2rem', boxShadow: '1rem 1rem 4rem gray', margin: '4rem'}}>
  <h1> Name: Sakib Khan</h1>
  <h3>hello</h3>
  <h3>NameTest: {props.name}, Gof: {props.Nayka}</h3>
  </div>)
} 
  
export default App;



