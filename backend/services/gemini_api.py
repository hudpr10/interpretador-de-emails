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
    contents="""Atue como meu assistente pessoal. Sua tarefa é classificar 
      o seguinte e-mail em apenas uma das categorias abaixo:
      PRODUTIVO: e-mails que exigem uma resposta ou ação, como solicitações de suporte, 
      dúvidas sobre o sistema, atualizações de casos em aberto ou pedidos específicos.
      IMPRODUTIVO: e-mails que não exigem ação imediata, como mensagens de agradecimento, 
      felicitações, avisos gerais ou conteúdos irrelevantes.: """ + email,
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
    contents="""Atue como meu assistente pessoal e elabore uma resposta profissional, 
      educada e objetiva para esse email """ + email + """.
      Aborde diretamente os pontos e solicitações feitas no e-mail.
      Forneça informações claras e organizadas.
      Mantenha um tom cortês e prestativo.
      Responda apenas com o texto do e-mail de resposta.""",
    config={
        "response_mime_type": "application/json",
        "response_schema": str
    },
  )
    
  return json.loads(response.text)
