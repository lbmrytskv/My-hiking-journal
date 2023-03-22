
import './App.css';
import data from "./data";
import Card from './Components/Card';
import Navbar from './Components/Navbar';


export default function App() {
  /*used a map() method so than we can pass an array of objects 
  from data.js to our Card components as props */
  const cards = data.map(item => {
  return (
    <Card
    key = {item.id}
    item = {item}
    />
  )
})
return (
  <div className = "main-container">
    <Navbar />
    {cards}
  </div>
)
}

