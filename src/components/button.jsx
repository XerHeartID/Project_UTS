function Button({ btnClick, text }) {
    return (
      <button
        className="py-1 px-3 rounded bg-green-600 text-white transition-opacity"
        onClick={btnClick}
      >
        {text}
      </button>
    );
  }
  
  export default Button;