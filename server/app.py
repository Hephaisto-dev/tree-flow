from db import db
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:toor@db/api'
app.config['SECRET_KEY'] = "maCleSecrete"
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
