import Location from "../images/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="place" className="place-img" />
      <div className="text-wrap">
        <div className="location">
          <img src={Location} alt="" className="location-img" />
          <p className="title-location">{props.location}</p>
          <a href={props.googleMapsUrl} className="google-map">
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title} </h2>
        <p className="dates">
          <span className="date">{props.startDate}</span>
          <span className="date">{props.endDate}</span>
        </p>
        <p className="description"> {props.description}</p>
      </div>
    </div>
  );
}
