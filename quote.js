const quote_text = document.querySelector(".quote-text");

function getQuote() {
    fetch("https://api.adviceslip.com/advice"
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const api_text = json.slip.advice;

        quote_text.innerText = `${api_text}`;
    })
}

getQuote();
