from flask import Flask, jsonify, request
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/generate-story', methods=['POST'])
def generate_story():
    if 'image' in request.files:
        image = request.files['image']
        # Handle the image file as needed
    else:
        return jsonify({"error": "No image file provided"}), 400

    genre = request.form.get('genre')
    style = request.form.get('style')
    length = request.form.get('length')
    creativity = request.form.get('creativity')

    # Check if all required fields are provided
    if not genre or not style or not length or not creativity:
        return jsonify({"error": "Missing required fields"}), 400

    data = {
        "genre": genre,
        "style": style,
        "length": length,
        "creativity": creativity
    }

    response = {
        "story": f"Generated story based on: {data}"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)















# from flask import Flask, jsonify, request

# app = Flask(__name__)

# @app.route('/api/generate-story', methods=['POST'])
# def generate_story():
#     data = request.json  # Get JSON data from the request
#     # Process the data here (e.g., generate a story based on the input)
#     response = {
#         "message": f"Received the following data: {data}"
#     }
#     return jsonify(response)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)





















# from flask import Flask, jsonify

# app = Flask(__name__)

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {
#         "message": "Jai Shree Ram"
#     }
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)








#  from flask import Flask, jsonify
#  app = Flask(_name_)

#  @app.route('/api/data',methods=['GET'])
# def get_data();
#  data = {
#   "message":"Jai Shree ram"
#  }
#  return jsonify(data)

# if __name__ == '__main__':
#  app.run(host='0.0.0.0', debug=True)