import './Input.css';

function Input(props) {
  return (
    <input
      className='Input'
      type='text'
      placeholder={props.placeholder}ъ
      onChange={props.handleChange}
    />
  );
}

export default Input;
