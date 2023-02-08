
import './App.css';
import data from "./data";
import Card from './Components/Card';
import Header from './Components/Navbar';


export default function App() {
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
    <Header />
    {cards}
  </div>
)
}


