const posts = [
  { name: "Uncle Jerome", text: "Happy birthday kido!" },
  { name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
  { name: "Old High School Teacher", text: "Hey ace, have a good one." }
];

const nameInput = document.getElementById("name-input");
const textInput = document.getElementById("text-input");
const submitBtn = document.getElementById("post-btn");
const timeline = document.getElementById("timeline");

function render () {
  //clear the timeline
  timeline.innerHTML = "" ;

  for (let post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<strong>${post.name}:</strong> ${post.text}`;
    timeline.appendChild(postDiv);
  }
}


submitBtn.onclick = function () {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    posts.push({ name, text });
    render();
    nameInput.value = "";
    textInput.value = "";
  }
};

// initial render
render();
