const div = document.querySelector("#maDiv");

// Exercice 1 - Modifier le texte de la div
const btnEx1 = document.createElement("button");
btnEx1.textContent = "Exercice 1 : Modifier le texte";
document.body.appendChild(btnEx1);

btnEx1.addEventListener("click", () => {
  div.textContent = "Nouveau texte";
});

// Exercice 2 - Ajouter des éléments au DOM
const btnEx2 = document.createElement("button");
btnEx2.textContent = "Exercice 2 : Ajouter un paragraphe";
document.body.appendChild(btnEx2);

btnEx2.addEventListener("click", () => {
  const nouveauParagraphe = document.createElement("p");
  nouveauParagraphe.textContent = "Ceci est un paragraphe ajouté dynamiquement !";
  div.appendChild(nouveauParagraphe);

  const nouveauBouton = document.createElement("button");
  nouveauBouton.textContent = "Bouton Ex2";
  document.body.appendChild(nouveauBouton);

  nouveauBouton.addEventListener("click", () => {
    console.log("Le nouveau bouton a été cliqué !");
  });
});

// Exercice 3 - Modifier le style d’un élément
const btnEx3 = document.createElement("button");
btnEx3.textContent = "Exercice 3 : Modifier le style";
document.body.appendChild(btnEx3);

btnEx3.addEventListener("click", () => {
  div.style.backgroundColor = "lightblue";
  div.style.color = "white";
  div.style.fontSize = "22px";
  div.style.padding = "10px";
  div.style.borderRadius = "8px";
});

// Exercice 4 - Ajouter un événement click pour changer le texte
const btnEx4 = document.createElement("button");
btnEx4.textContent = "Exercice 4 : Changer le texte";
document.body.appendChild(btnEx4);

btnEx4.addEventListener("click", () => {
  div.innerText = "Le texte a changé !";
});
