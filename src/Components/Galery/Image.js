import "../../Styles/Galery.css"

function Image(props) {
  return (
    <div className="gallery">   
      <img src={props.src} alt={props.alt} width="600" height="400" />
      <div className="desc">{props.desc}</div>
    </div>
  );
}

export default Image;
