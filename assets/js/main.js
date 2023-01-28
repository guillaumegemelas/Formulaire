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

    //requête vers le serveur eavec requete sur internet (pas en local) depuis url donnée pas Netlify:
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
    //il faudra changer l'adresse si on veut remettre en local et faire test avec liveServeur du HTML
    // const response = await axios.post("https://chipper-gelato-d55fff.netlify.app/form", data);
    //
    console.log(response);
  });
});
