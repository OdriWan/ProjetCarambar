//Script JS pour la mise à jour des blagues au clic sur le bouton
document.addEventListener("DOMContentLoaded", (event) => {
  let getJokeBtn = document.querySelector("#get-joke");
  let jokeQuestion = document.querySelector(".joke-question");
  let jokeAnswer = document.querySelector(".joke-answer");
  let jokeID = document.querySelector("#joke-id");

  //Au clic sur le bouton
  getJokeBtn.addEventListener("click", function (event) {
    let jokeIDValue = jokeID.textContent;

    //Requête asynchrone pour récupérer/afficher la blague aléatoire
    fetch(`/blagues/random?currentJokeID=${jokeIDValue}`)
      .then((response) => response.json())
      .then((data) => {
        jokeID.innerText = data.id;
        jokeQuestion.innerText = data.question;
        jokeAnswer.innerText = data.answer;
      })
      .catch((error) => console.error("Error whilst fetching the joke"));
  });
});
