import mapImage from "./img/map.jpg";
import "./css/mainmap.css";

function MainMap({ selectedLocation }) {
  const getTransformOrigin = () => {
    switch (selectedLocation) {
      case "kaerMorhen":
        return "65% 10%";
      case "novigrad":
        return "30% 25%";
      case "skellige":
        return "10% 45%";
        case "vizima":
        return "50% 50%";
      case "toussaint":
        return "87% 70%";
      default:
        return "center";
    }
  };

  return (
    <div className={`main__map-container ${selectedLocation ? "zoomed" : ""}`}>
      <img
        src={mapImage}
        alt="Mapa del continente de The Witcher"
        className="main__mapa"
        style={{ transformOrigin: getTransformOrigin() }}
      />
    </div>
  );
}

export default MainMap;
