import generateCardsAfterEmailConclusion from "./generateCardsAfterEmailConclusion.js";
import { API_URL } from "./config.js";

async function apiPostJson(email) {
  const response = await fetch(`${API_URL}/api/analyze-json`, {
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

  const response = await fetch(`${API_URL}/api/analyze-file`, {
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
