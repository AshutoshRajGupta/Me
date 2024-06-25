function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const projects = document.querySelectorAll(".bento-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      // Filter projects based on the selected category
      let visibleProjects = [];
      projects.forEach((project) => {
        if (
          filter === "all" ||
          project.getAttribute("data-category") === filter
        ) {
          project.classList.remove("hidden");
          visibleProjects.push(project);
        } else {
          project.classList.add("hidden");
        }
      });

      // Remove hidden class from all filtered projects to display them continuously
      visibleProjects.forEach((project) => {
        project.classList.remove("hidden");
      });

      // Reflow grid after updating project visibility
      const bentoGrid = document.querySelector(".bento-grid");
      bentoGrid.style.display = "none";
      bentoGrid.offsetHeight; // Trigger a reflow
      bentoGrid.style.display = "grid";
    });
  });
});

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");

  const userMessage = userInput.value;
  if (userMessage.trim() === "") return;

  // Display user message
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("message", "user");
  userMessageElement.textContent = userMessage;
  chatLog.appendChild(userMessageElement);

  // Clear input
  userInput.value = "";

  // Generate bot response
  const botResponse = getBotResponse(userMessage);

  // Display bot response
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add("message", "bot");
  botMessageElement.textContent = botResponse;
  chatLog.appendChild(botMessageElement);

  // Scroll to the bottom
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(userMessage) {
  const responses = {
    hi: "Hello! How can I help you?",
    hello: "Hi there! What would you like to know?",
    skills:
      "I have expertise in HTML, CSS, JavaScript, React, Node.js, and more.",
    experience:
      "I have worked as a Full Stack Developer Intern at Solar Secure Solutions and a Web Developer at Monzen Sustainable Development.",
    projects:
      "I have completed several projects, including Watch Ecommerce, Flutter Clean Architecture Blog App, Cryptdrive Version 2, and more.",
    contact: "You can contact me at ag2364443@gmail.com.",
    education:
      "I graduated from [Your University] with a degree in [Your Major].",
    hobbies:
      "In my free time, I enjoy hiking, reading tech blogs, and working on open-source projects.",
    achievements:
      "I have been recognized for my contributions to open-source projects and have received awards in web development.",
    goals:
      "My professional goals include becoming a lead developer and contributing to large-scale projects that have a positive impact.",
  };

  userMessage = userMessage.toLowerCase();

  return (
    responses[userMessage] ||
    "I'm not sure how to respond to that. Can you ask something else?"
  );
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
}

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
