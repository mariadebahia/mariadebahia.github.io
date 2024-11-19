from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/prompt")
def prompt():
    data = {'name': 'Maria'}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
    


