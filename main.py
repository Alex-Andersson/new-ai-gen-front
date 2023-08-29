from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://new-ai-front-1c9059249bcc.herokuapp.com"}})

# Set up logging
logging.basicConfig(level=logging.DEBUG)
# Use environment variables or a configuration file in a real-world scenario.
openai.api_key = "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"

class DALLImageGenerator:
    
    def __init__(self, api_key):
        openai.api_key = api_key

    def generate_image(self, prompt, n=4, size="256x256"):
        try:
            response = openai.Image.create(
                prompt=prompt,
                n=n,
                size=size
            )
            # Return all the URLs of the generated images
            return [img['url'] for img in response['data']]
        except Exception as e:
            logging.error(f"Error generating image: {e}")
            return []

# Step 3: Initialize your generator using the provided API key
generator = DALLImageGenerator("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")

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.json['prompt']
    urls = generator.generate_image(prompt)
    if urls:
        return jsonify({"urls": urls})
    else:
        return jsonify({"error": "Failed to generate images"}), 500

if __name__ == '__main__':
    app.run(port=5000)

