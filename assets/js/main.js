document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    //visu terminal
    console.log("submit");

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    //requête vers le serveur en local
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
    //il faudra changer l'adressesi on veut mettre sur le serveur
    //idem exo sur vinted backend
    // const response = await axios.post(
    //   "https://chipper-gelato-d55fff.netlify.app",
    //   data
    // );
    console.log(response);
  });
});
