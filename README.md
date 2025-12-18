# Workout Generator

A web application for generating personalized workout routines based on workout type and difficulty level. The app includes both a Flask backend API and a standalone HTML frontend.

## Features

- **Multiple Workout Types**: Choose from Full Body, Upper Body, Lower Body, or Core workouts
- **Difficulty Levels**: Select Beginner, Intermediate, or Advanced difficulty
- **Comprehensive Exercise Database**: 29+ exercises covering all workout types and difficulty levels
- **API Integration**: Optional integration with Wger API for additional exercises
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop and mobile devices

## Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:MattVogelsang/Workout-Generator.git
cd Workout-Generator
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Running the Flask Backend

Start the Flask server:
```bash
python app.py
```

The server will start on `http://127.0.0.1:3000`

### Using the Standalone HTML Version

Simply open `workout_generator.html` in your web browser. No server required!

### API Endpoint

The Flask backend provides a POST endpoint for generating workouts:

**Endpoint**: `/generate_workout`

**Method**: POST

**Request Body**:
```json
{
  "type": "upper_body",
  "difficulty": "intermediate"
}
```

**Response**:
```json
{
  "workout": [
    {
      "name": "Pull-ups",
      "type": "upper_body",
      "difficulty": "intermediate",
      "description": "An upper body exercise that primarily targets the back and biceps.",
      "sets": "3",
      "reps": "8-12"
    }
  ],
  "type": "upper_body",
  "difficulty": "intermediate"
}
```

## Project Structure

```
Workout-Generator/
├── app.py                    # Flask backend application
├── exercises.py              # Exercise database
├── workout_generator.html    # Standalone HTML frontend (no server required)
├── index.html                # Redirect page to workout_generator.html
├── requirements.txt          # Python dependencies
├── templates/                # Flask templates
│   └── index.html           # Flask template for workout generator
├── static/                   # Flask static files
│   ├── js/
│   │   └── api_integration.js  # Wger API integration
│   └── css/                 # CSS files (if any)
└── portfolio/                # Portfolio project (separate React/TypeScript app)
```

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Tailwind CSS
- **API**: Wger Workout Manager API (optional)

## License

See LICENSE file for details.