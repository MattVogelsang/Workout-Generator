from flask import Flask, render_template, request, jsonify
from exercises import EXERCISES
import logging
import sys

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

# Allow all origins for development
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate_workout', methods=['POST'])
def generate_workout():
    try:
        data = request.get_json()
        app.logger.debug(f"Received request data: {data}")
        
        workout_type = data.get('type', 'full_body')
        difficulty = data.get('difficulty', 'intermediate')
        
        # Filter exercises based on workout type and difficulty
        available_exercises = [
            ex for ex in EXERCISES 
            if ex['type'] == workout_type and ex['difficulty'] == difficulty
        ]
        
        app.logger.debug(f"Found {len(available_exercises)} exercises matching criteria")
        
        if not available_exercises:
            return jsonify({
                'error': f'No exercises found for type: {workout_type} and difficulty: {difficulty}'
            }), 400
        
        # Generate a workout with 5-8 exercises
        import random
        num_exercises = random.randint(5, 8)
        workout = random.sample(available_exercises, min(num_exercises, len(available_exercises)))
        
        return jsonify({
            'workout': workout,
            'type': workout_type,
            'difficulty': difficulty
        })
    except Exception as e:
        app.logger.error(f"Error generating workout: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = 3000
    app.logger.info(f"Starting server on port {port}...")
    app.run(
        debug=True,
        port=port,
        host='127.0.0.1',
        threaded=True,
        use_reloader=True
    )
