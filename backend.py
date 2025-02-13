from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

posts = []

@app.route("/posts", methods=["GET"])
def get_posts():
    return jsonify(posts)

@app.route("/posts", methods=["POST"])
def create_post():
    data = request.json
    if not data.get("titulo") or not data.get("conteudo"):
        return jsonify({"error": "Título e conteúdo são obrigatórios"}), 400
    post = {
        "titulo": data["titulo"],
        "conteudo": data["conteudo"],
        "data": data.get("data", "N/A")
    }
    posts.append(post)
    print(posts)
    return jsonify(post), 201

if __name__ == "__main__":
    app.run(debug=True, port=3000)
