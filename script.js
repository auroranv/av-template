let projectsData = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // filter for category
    projectsData = data;
    if (window.location.search == "?photography") {
      filterPhoto();
    } else {
      filterFilm();
    }
  });

// PAGE FILTERS: there is only one page and we filter the content based on if it is a film or photography project

function filterFilm() {
  let filterData = projectsData.filter((project) => project.category == "film");
  //console.log(filterData);

  const categoryTitle = document.getElementById("categorytitle");
  categoryTitle.innerHTML = "<p>Film Projects</p>";

  loadProjects(filterData);
}

function filterPhoto() {
  let filterData = projectsData.filter(
    (project) => project.category == "photo"
  );
  //console.log(filterData);

  const categoryTitle = document.getElementById("categorytitle");
  categoryTitle.innerHTML = "<p>Photography Projects</p>";

  loadProjects(filterData);
}

// PROJECT PAGE: loads html and fills it with data for each project

function loadProjects(data) {
  const projectsGallery = document.getElementById("projectsgallery");
  let gallery = "";

  data.forEach((project) => {
    let innerHTML = `
    <div class="gallery-item">
        
        <a href="/project.html?${project.url}">
            <div class="gallery-image">
                <img src=${project.folder + project.cover} />
            </div>
        </a>

     <div class="gallery-item-title">
          <p>${project.title}</p>
      </div>
     </div>
    `;
    gallery = gallery + innerHTML;
  });
  projectsGallery.innerHTML = gallery;
}
