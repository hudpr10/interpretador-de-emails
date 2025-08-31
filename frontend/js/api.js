import generateCardsAfterEmailConclusion from "./generateCardsAfterEmailConclusion.js";

// Endereço local padrão do Flask
// const URL = "http://127.0.0.1:5000";
const URL = "https://interpretador-de-emails.onrender.com";

async function apiPostJson(email) {
  const response = await fetch(`${URL}/api/json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });

  const json = await response.json();

  generateCardsAfterEmailConclusion(
    json.analyzis.conclusion,
    json.analyzis.justification,
    json.reply
  );
}

async function apiPostFile(emailFile) {
  const formData = new FormData();
  formData.append("emailFile", emailFile);

  const response = await fetch(`${URL}/api/file`, {
    method: "POST",
    body: formData,
  });

  const json = await response.json();

  generateCardsAfterEmailConclusion(
    json.analyzis.conclusion,
    json.analyzis.justification,
    json.reply
  );
}

export { apiPostJson, apiPostFile };
