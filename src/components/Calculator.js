import '../styles/Styles.css';

function Calculator() {
  return (
    <>
      <div className="container">
        <div className="container-row">
          {/* box with answer */}
        </div>
        <div className="container-row">
          <button className="row-item number">7</button>
          <button className="row-item number">8</button>
          <button className="row-item number ">9</button>
          <button className="row-item clear">C</button>
        </div>
        <div className="container-row">
          <button className="row-item number">4</button>
          <button className="row-item number">5</button>
          <button className="row-item number">6</button>
          <button className="row-item operation">x</button>
        </div>
        <div className="container-row">
          <button className="row-item number">1</button>
          <button className="row-item number">2</button>
          <button className="row-item number">3</button>
          <button className="row-item operation">-</button>
        </div>
        <div className="container-row">
          <button className="row-item number">0</button>
          <button className="row-item equal">=</button>
          <button className="row-item operation">+</button>
          <button className="row-item operation">÷</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
