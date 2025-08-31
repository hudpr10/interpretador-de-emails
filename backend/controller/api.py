from flask import Blueprint, jsonify, request

from services.gemini_api import verify_email, auto_response
from services.read_file import read_file

api_bp = Blueprint("api", __name__)

@api_bp.route("/json", methods=["POST"])
def analyze_json():
  data = request.get_json()  
  email_content = data.get("email")

  email_analyse = verify_email(email_content)
  email_response = auto_response(email_content)

  return jsonify({"analyzis": email_analyse, "reply": email_response})

@api_bp.route("/file", methods=["POST"])
def analyze_file():
  file = request.files["emailFile"]
  email_content = read_file(file)
  
  email_analyse = verify_email(email_content)
  email_response = auto_response(email_content)

  return jsonify({"analyzis": email_analyse, "reply": email_response})
