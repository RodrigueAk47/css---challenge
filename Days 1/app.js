const click = document.querySelectorAll(".card-container");

click.forEach((card) => {
  card.addEventListener("click", () => {
    RemoveClassClick()
    card.classList.add("click")
  });
});


function RemoveClassClick() {
  click.forEach(card => {
    card.classList.remove("click")
  })
}
