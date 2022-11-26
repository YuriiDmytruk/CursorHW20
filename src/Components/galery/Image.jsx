import "./styles/Galery.css"

function Image(props) {
  return (
    <div className="gallery">   
      <img src={props.image.src} alt={props.image.alt} width="600" height="400" />
      <div className="desc">{props.image.desc}</div>
    </div>
  );
}

export default Image;
