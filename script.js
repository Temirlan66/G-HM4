
const request = async () => {
  try {
    const response = await fetch("peopls.json");
    const data = await response.json();
    data.map((item) => {
      const liList = document.createElement("li");
      liList.innerHTML = `
            <li>Name:${item.name}</li>
            <li>Age:${item.age}</li>
            `;
      document.getElementById("ul-list").append(liList);
    });
  } catch (error) {
    console.log("ERROR");
  }
};

request();
