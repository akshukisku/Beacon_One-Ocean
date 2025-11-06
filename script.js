const images = document.querySelectorAll(".swiper-img");
const text = document.getElementById("testimonial-text");
const name = document.getElementById("testimonial-name");
const role = document.getElementById("testimonial-role");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const testimonials = [
  {
    text: "I was planning on doing a DIY project at home since I had more time nowadays...",
    name: "Rita Brown",
    role: "VP Marketing at Bowl",
  },
  {
    text: "C-Line experts were super helpful, they guided me step by step throughout my project.",
    name: "John Carter",
    role: "CEO at BrightTech",
  },
  {
    text: "Loved their service! Quick responses and clear instructions helped me a lot.",
    name: "Ava Williams",
    role: "Interior Designer",
  },
  {
    text: "They saved me so much money and time. Highly recommend their experts!",
    name: "Michael Adams",
    role: "Freelancer",
  },
  {
    text: "Best experience ever! They handled everything smoothly and professionally.",
    name: "Sophia Turner",
    role: "Architect",
  },
];

let index = 0;

function updateTestimonial(i) {
  text.textContent = testimonials[i].text;
  name.textContent = testimonials[i].name;
  role.textContent = testimonials[i].role;

  images.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
  });
}

rightBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial(index);
});

leftBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(index);
});

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    updateTestimonial(index);
  });
});
