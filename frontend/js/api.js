import generateCardsAfterEmailConclusion from "./generateCardsAfterEmailConclusion.js";

async function apiPostJson(email) {
  const response = await fetch("http://127.0.0.1:5000/api/analyze-json", {
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

  const response = await fetch("http://127.0.0.1:5000/api/analyze-file", {
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
