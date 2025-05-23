const inputTemp = document.getElementById("inputTemp");
    const inputUnit = document.getElementById("inputUnit");
    const outputTemp = document.getElementById("outputTemp");
    const outputUnit = document.getElementById("outputUnit");

    function convertTemperature(value, from, to) {
      if (from === to) return value;

      let celsius;
      
      if (from === "C") {
        celsius = parseFloat(value);
      } else if (from === "F") {
        celsius = (parseFloat(value) - 32) * 5/9;
      } else if (from === "K") {
        celsius = parseFloat(value) - 273.15;
      }

      let result;
     
      if (to === "C") {
        result = celsius;
      } else if (to === "F") {
        result = (celsius * 9/5) + 32;
      } else if (to === "K") {
        result = celsius + 273.15;
      }

      return result.toFixed(2);
    }

    function updateResult() {
      const value = inputTemp.value;
      const from = inputUnit.value;
      const to = outputUnit.value;
      if (value === "") {
        outputTemp.value = "";
        return;
      }
      const result = convertTemperature(value, from, to);
      outputTemp.value = result;
    }

    inputTemp.addEventListener("input", updateResult);
    inputUnit.addEventListener("change", updateResult);
    outputUnit.addEventListener("change", updateResult);