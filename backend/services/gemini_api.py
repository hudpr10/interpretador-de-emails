import os
from dotenv import load_dotenv

from google import genai

from pydantic import BaseModel
import enum
import json

load_dotenv()
client = genai.Client(api_key = os.getenv("GEMINI_API_KEY"))

def verify_email(email):
  class ConclusionEnum(enum.Enum):
    PRODUCTIVE = "Produtivo"
    UNPRODUCTIVE = "Improdutivo"

  class Conclusion(BaseModel):
    conclusion: ConclusionEnum
    justification: str

  response = client.models.generate_content(
    model="gemini-2.5-flash", 
    contents="""Atue como meu assistente pessoal, quero que leia o conteudo do seguinte e-mail e
    defina-o, de maneira objetiva, entre PRODUTIVO (precisam de uma resposta específica, solicitação 
    de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema) ou IMPRODUTIVO 
    (Não necessita de uma ação imediata, como mensagens de felicitação e agradecimento).
    Email: """ + email,
    config={
        "response_mime_type": "application/json",
        "response_schema": Conclusion
    },
  )

  print(json.loads(response.text))

  return json.loads(response.text)

def auto_response(email):
  response = client.models.generate_content(
    model="gemini-2.5-flash", 
    contents="Com base nesse e-mail analisado anteriormente pelo atendente: " + email + "poderia atuar como " +
    "assistente e escrever uma resposta clara para o remente, abordando os assuntos solicitados no email.",
    config={
        "response_mime_type": "application/json",
        "response_schema": str
    },
  )
    
  return json.loads(response.text)
