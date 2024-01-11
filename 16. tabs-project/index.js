const tabs = document.querySelector(".tabs");

const btns = document.querySelectorAll(".button");

const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (Event) => {
  const id = Event.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live")
    });
    Event.target.classList.add("live");
    articles.forEach((article) => {
      article.classList.remove("live");
    });

    const element = document.getElementById(id);
    element.classList.add("live");
  }
})

