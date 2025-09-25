const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
    const input = prompt("Enter an integer N:");
    const N = parseInt(input);

    if (isNaN(N) || N <= 0) {
        resultDiv.innerHTML = "Please enter a valid positive integer.";
        resultDiv.style.color = "red";
        return;
    }

    let output = "";

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            output += `<span class="number">${i}</span>`;
        } else {
            break;
        }
    }

    resultDiv.innerHTML = "Numbers whose square ≤ " + N + ":<br>" + output;
    resultDiv.style.color = "#222";
});
