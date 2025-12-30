import "./index.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    height: "",
    weight: "",
  });

  const [result, setResult] = useState("");

  const handleHeight = (e) => {
    setResult("");
    setData({
      ...data,
      height: e.target.value,
    });
  };

  const handleWeight = (e) => {
    setResult("");
    setData({
      ...data,
      weight: e.target.value,
    });
  };

  const calcBMI = () => {
    const { height, weight } = data;
    if (!height || !weight) {
      setResult("Please enter height and weight");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    if (bmi < 18.5) {
      setResult(`Your BMI is ${bmi} & You are Underweight.`);
    } else if (bmi < 25) {
      setResult(`Your BMI is ${bmi} & You are Normal.`);
    } else if (bmi < 30) {
      {
        setResult(`Your BMI is ${bmi} & You are Overweight.`);
      }
    } else {
      setResult(`Your BMI is ${bmi} & You are Obese.`);
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      {/* The height part */}
      <label htmlFor="height">Height (cm)</label>
      <input
        type="number"
        id="height"
        placeholder="e.g. 175"
        onChange={handleHeight}
        value={data.height}
      />

      {/* The weight part */}
      <label htmlFor="weight">Weight (kg)</label>
      <input
        type="number"
        id="weight"
        placeholder="e.g. 65"
        onChange={handleWeight}
        value={data.weight}
      />

      {/* The button part */}
      <button onClick={calcBMI}>Calculate</button>

      {/* The result part */}
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
