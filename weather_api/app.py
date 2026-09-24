from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route("/weather")
def weather():
    city = request.args.get("city", "Unknown")
    temperature = random.randint(20, 45)
    return jsonify({"city": city, "temp": temperature})

if __name__ == '__main__':
    import os
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
