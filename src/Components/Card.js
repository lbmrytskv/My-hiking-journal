

export default function Card(props) {
return (
    <section className = "card">
        <div className = "slider">
        <img src ={`../pictures/${props.item.imageUrl}`} 
        className = "card-image"/>
        
        </div>
        
        
        <div className ="card-description">
        <div className = "location-description">
        <img src = "../pictures/Fill 220.png" className ="image-location"/> 
        <p className = "item-location">{props.item.location}</p>
        <a className = "item-google" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>


        <div className = "details-container">
        <h1 className = "item-tittle">{props.item.title}</h1>
        <p className = "item-dates">{props.item.Date}</p>
        <p className = "item-description">{props.item.description}</p>
        </div>
        </div>
        </section>
    )
}
