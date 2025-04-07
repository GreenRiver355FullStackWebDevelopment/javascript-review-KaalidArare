//Do not change //////////////////////////////////
import { calculateStarAverage } from "./logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
const reviewsContainer = document.querySelector(".reviews");

const starRatingP = document.querySelector(".starRating");

function renderReview(review) {

  // create elements
  const container = document.createElement("div");
  container.classList.add("review-container");
  
  const img = document.createElement("img");
  img.src = review.image;
  img.alt = review.username;

  const textDiv = document.createElement("div");

  const usernameP = document.createElement("p");
  usernameP.textContent = review.username;

  const starP = document.createElement("p");
  starP.textContent = `${review.star}`;

  const reviewP = document.createElement("p");
  reviewP.textContent = review.review;

  // appending the paragraphs to the div
  textDiv.appendChild(usernameP);
  textDiv.appendChild(starP);
  textDiv.appendChild(reviewP);
  // appending the image and the textDiv to the container
  container.appendChild(img);
  container.appendChild(textDiv)
  // appending the container to the reviews class
  reviewsContainer.appendChild(container);
}

// iterating over each review and in the reviews array
reviews.forEach(renderReview);
