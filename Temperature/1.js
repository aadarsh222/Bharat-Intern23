// Add an event listener to the Convert button
document.getElementById("convertBtn").addEventListener("click", function () {
    // Get the input values
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    // Convert from Celsius to Fahrenheit and display it
    if (celsiusInput.value !== "") {
        var celsiusValue = parseFloat(celsiusInput.value);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }

    // Convert from Fahrenheit to Celsius and display it
    if (fahrenheitInput.value !== "") {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
    }
});

// Add an event listener to the Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
});
