from flask import Flask, request, jsonify, render_template
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash

app = Flask(__name__)

app.config["SECRET_KEY"] = "1234"
app.config["MONGO_URI"] = "mongodb+srv://2100090162:manigaddam@deepsheild.kzgpo9p.mongodb.net/Hackathon"
mongo = PyMongo(app)

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.json
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        username = data.get('username')
        password = data.get('password')

        # Check if username already exists
        if mongo.db.users.find_one({"username": username}):
            return jsonify({'message': 'Username already exists!'}), 400

        # Hash the password
        hashed_password = generate_password_hash(password)

        new_user = {
            'firstName': first_name,
            'lastName': last_name,
            'username': username,
            'password': hashed_password
        }

        # Insert the new user into the 'users' collection
        mongo.db.users.insert_one(new_user)

        return jsonify({'message': 'User registered successfully!'}), 201

    except Exception as e:
        return jsonify({'message': str(e)}), 500

@app.route('/')
def function():
    return render_template('HomePage.js')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
