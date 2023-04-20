const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    
    const userInput = document.getElementById("searchByID")
    console.log(userInput.value)

    fetch(`http://localhost:3000/movies/${userInput.value}`)
    .then((res) => res.json())
    .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
}
)
}

document.addEventListener('DOMContentLoaded', init);