function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme =
    html.dataset.theme === "light" ? "dark" : "light";
}

let lang = "pt";

function toggleLang() {
  const hero = document.getElementById("heroText");

  if (lang === "pt") {
    hero.textContent =
      "Bachelor in Information Systems with experience in academic, scientific and technological projects involving Artificial Intelligence, Data Science and social impact solutions.";
    lang = "en";
  } else {
    hero.textContent =
      "Bacharel em Sistemas de Informação pela Universidade Federal Rural da Amazônia (UFRA), com atuação em projetos acadêmicos, científicos e tecnológicos, envolvendo Inteligência Artificial, Ciência de Dados e desenvolvimento de soluções de impacto social.";
    lang = "pt";
  }
}
