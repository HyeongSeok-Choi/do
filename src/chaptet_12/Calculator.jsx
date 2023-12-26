import React,{useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoillingVerdict(props) { // 끓는 점 계산
   if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
   }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) { // 화씨를 섭씨로 변환
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { //섭씨를 화씨로 변환
  return (celsius*9) / 5 +32 ;
}

function tryConvert(temperature, convert){ //온도와 변환 종류 선택 해서 변환을 실행
  const input = parseFloat(temperature);   //화씨가 소수점 이하 값을 나타내기 위해 parseFloat 실수형으로 변환 
  if (Number.isNaN(input)){                // 입력값이 숫자인지 확인해서 숫자가 아니면 빈공백 "출력"
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000 ) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c")

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c")
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f")
  };

  const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature ;
  const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature ;// 화씨 온도 입력시

      return(
        <div>
            <TemperatureInput
              scale = "c"
              temperature={celsius}
              onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
              scale = "f"
              temperature={fahrenheit}
              onTemperatureChange={handleFahrenheitChange}
            />
            <BoillingVerdict celsius={parseFloat(celsius)}/>
        </div>
      );


}

export default Calculator;