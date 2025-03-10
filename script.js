function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultText = "";
    let resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultText = "❌ Please enter a valid temperature!";
        resultDiv.classList.remove("opacity-100");
    } else if (fromUnit === toUnit) {
        resultText = `⚠ Same unit selected: ${temp}°${toUnit}`;
        resultDiv.classList.add("opacity-100");
    } else {
        let convertedTemp;
        
        if (fromUnit === "C" && toUnit === "F") {
            convertedTemp = (temp * 9/5) + 32;
        } else if (fromUnit === "C" && toUnit === "K") {
            convertedTemp = temp + 273.15;
        } else if (fromUnit === "F" && toUnit === "C") {
            convertedTemp = (temp - 32) * 5/9;
        } else if (fromUnit === "F" && toUnit === "K") {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        } else if (fromUnit === "K" && toUnit === "C") {
            convertedTemp = temp - 273.15;
        } else if (fromUnit === "K" && toUnit === "F") {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        }
        
        resultText = `✅ Converted Temperature: ${convertedTemp.toFixed(2)}°${toUnit}`;
        resultDiv.classList.add("opacity-100");
    }
    
    resultDiv.textContent = resultText;
}