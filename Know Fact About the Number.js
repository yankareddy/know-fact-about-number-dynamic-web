let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner")

function displayResult(result) {
    spinnerEl.classList.add("d-none")
    factEl.textContent = result.fact;
}

function userInput(event) {
    if (event.key === "Enter") {
        let userValue = userInputEl.value
        if (userValue === "") {
            alert("Eneter a number")
        } else {
            spinnerEl.classList.remove("d-none");
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue;
            let options = {
                method: "GET"
            }
            fetch(url, options)
                .then(function(response) {
                    return response.json()
                }).then(function(jsonData) {
                    console.log(jsonData)
                    displayResult(jsonData)
                });
        }
    }


}

userInputEl.addEventListener("keydown", userInput);