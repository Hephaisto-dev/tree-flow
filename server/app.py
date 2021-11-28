from src.db import db
from flask import Flask, jsonify, request
from flask_cors import CORS
from src.init_data import Temperature

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:toor@db/api'
app.config['SECRET_KEY'] = "maCleSecrete"
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)

@app.route('/research1', methods=['GET'])
def research1():
    plants = ["concombre", "tomate", "carrotte"]
    return jsonify(plants)

@app.route('/research2', methods=['GET'])
def research2():
    plants = ["betterave", "carrotte"]
    return jsonify(plants)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
    a = Temperature()