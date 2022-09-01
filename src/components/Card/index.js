import './Card.css';

function Card(props) {
  return (
    <div className='Card'>
      <img className='Card-image' src={props.src} alt={props.alt} />
      <p className='Card-title'>{props.title}</p>
      <p className='Card-subtitle'>{props.subtitle}</p>
    </div>
  );
}

export default Card;
