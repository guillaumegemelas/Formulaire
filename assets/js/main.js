document.addEventListener("DOMContentLoaded", () => {
  try {
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

      //requête vers le serveur avec requete en local (port 3000)
      const response = await axios.post("http://localhost:3000/form", data);

      //il faudra changer l'adresse si on veut faire requete en ligne (pas en local) depuis url donnée pas Netlify:
      // const response = await axios.post(
      //   "https://chipper-gelato-d55fff.netlify.app/form",
      //   data
      // );
      //
      console.log(response);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
