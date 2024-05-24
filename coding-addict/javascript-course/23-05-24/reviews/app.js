const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const previousButtonElement = document.querySelector(".prev-btn");
const nextButtonElement = document.querySelector(".next-btn");
const randomButtonElement = document.querySelector(".random-btn");

let currentIndex = 0;

const imgElement = document.getElementById("person-img");
const authorElement = document.getElementById("author");
const jobElement = document.getElementById("job");
const infoElement = document.getElementById("info");

// Function to show a person's review based on the current index
function showPerson(index) {
  const person = reviews[index];
  imgElement.src = person.img;
  authorElement.textContent = person.name;
  jobElement.textContent = person.job;
  infoElement.textContent = person.text;
}

// Show the first person on initial load
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentIndex);
});

// Show the previous person in the reviews array
previousButtonElement.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showPerson(currentIndex);
});

// Show the next person in the reviews array
nextButtonElement.addEventListener("click", function () {
  currentIndex = (currentIndex + 1 + reviews.length) % reviews.length;
  showPerson(currentIndex);
});

// Generate a random review
function generateRandomReviews() {
  currentIndex = Math.floor(Math.random() * reviews.length);
  showPerson(currentIndex);
}

randomButtonElement.addEventListener("click", generateRandomReviews);
