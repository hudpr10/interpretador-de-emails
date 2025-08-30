import PyPDF2
from io import BytesIO

def read_file(file):
  email_content = ""
  
  if (file.filename.endswith(".pdf")):
    pdf_reader = PyPDF2.PdfReader(BytesIO(file.read()))
    for page in pdf_reader.pages:
      email_content += page.extract_text() or ""
    
  elif (file.filename.endswith(".txt")):
    email_content = file.read().decode("utf-8")
  
  return email_content
