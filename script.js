
const request = new XMLHttpRequest();
request.open("GET", "peopls.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.addEventListener("load", () => {
  const response = JSON.parse(request.response);
  response.map((item) => {
    const liList = document.createElement("li");
    liList.innerHTML = `
        <li>Name:${item.name}</li>
        <li>Age:${item.age}</li>
        `;
    document.getElementById("ul-list").append(liList);
  });
});
