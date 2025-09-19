let projectData = [];

let projecturl = window.location.search.slice(1);

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // filter for category
    projectData = data.filter((project) => project.url == projecturl)[0];

    loadContent();
  });

function loadContent() {
  // put header img
  let headerdiv = document.getElementById("projectheader");
  headerdiv.innerHTML = `
  <img src="${projectData.folder + projectData.cover}" />`;
  // put title
  let titlediv = document.getElementById("projecttitle");
  titlediv.innerHTML = `<p>${projectData.title}</p>`;
  // put year
  let yeardiv = document.getElementById("projectyear");
  yeardiv.innerHTML = `<p>${projectData.year}</p>`;
  // put tags
  // put genre (opt)
  // put length
  // put description
  // put images
  // put video
}
