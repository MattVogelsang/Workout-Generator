// Wger Workout Manager API Integration
// This file contains functions to fetch exercises from the Wger API

// Cache for API responses to avoid excessive API calls
const apiCache = {
    exercises: null,
    categories: null,
    muscles: null,
    lastFetch: null
};

// Function to fetch data from the API with caching
async function fetchFromAPI(endpoint) {
    // Check if we have cached data that's less than 1 hour old
    const now = new Date();
    if (apiCache.lastFetch && (now - apiCache.lastFetch) < 3600000) {
        if (endpoint === 'exercise' && apiCache.exercises) {
            return apiCache.exercises;
        } else if (endpoint === 'exercisecategory' && apiCache.categories) {
            return apiCache.categories;
        } else if (endpoint === 'muscle' && apiCache.muscles) {
            return apiCache.muscles;
        }
    }

    try {
        const response = await fetch(`https://wger.de/api/v2/${endpoint}/`);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        // Cache the results
        if (endpoint === 'exercise') {
            apiCache.exercises = data;
        } else if (endpoint === 'exercisecategory') {
            apiCache.categories = data;
        } else if (endpoint === 'muscle') {
            apiCache.muscles = data;
        }
        apiCache.lastFetch = now;
        
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
}

// Function to fetch exercise details
async function fetchExerciseDetails(exerciseId) {
    try {
        const response = await fetch(`https://wger.de/api/v2/exerciseinfo/${exerciseId}/`);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching exercise details for ID ${exerciseId}:`, error);
        return null;
    }
}

// Function to get all exercises
async function getAllExercises() {
    return await fetchFromAPI('exercise');
}

// Function to get all exercise categories
async function getAllCategories() {
    return await fetchFromAPI('exercisecategory');
}

// Function to get all muscles
async function getAllMuscles() {
    return await fetchFromAPI('muscle');
}

// Function to get exercises by category
async function getExercisesByCategory(categoryId) {
    const exercises = await getAllExercises();
    if (!exercises) return [];
    
    return exercises.results.filter(exercise => exercise.category === categoryId);
}

// Function to get exercises by muscle
async function getExercisesByMuscle(muscleId) {
    const exercises = await getAllExercises();
    if (!exercises) return [];
    
    return exercises.results.filter(exercise => 
        exercise.muscles.includes(muscleId) || 
        exercise.muscles_secondary.includes(muscleId)
    );
}

// Function to get exercises by equipment
async function getExercisesByEquipment(equipmentId) {
    const exercises = await getAllExercises();
    if (!exercises) return [];
    
    return exercises.results.filter(exercise => exercise.equipment.includes(equipmentId));
}

// Function to get a random workout based on category and difficulty
async function getRandomWorkout(categoryId, difficulty) {
    const exercises = await getExercisesByCategory(categoryId);
    if (!exercises || exercises.length === 0) return [];
    
    // Determine number of exercises based on difficulty
    let numExercises;
    switch (difficulty) {
        case 'beginner':
            numExercises = 5;
            break;
        case 'intermediate':
            numExercises = 7;
            break;
        case 'advanced':
            numExercises = 10;
            break;
        default:
            numExercises = 6;
    }
    
    // Shuffle exercises and select the required number
    const shuffled = [...exercises].sort(() => 0.5 - Math.random());
    const selectedExercises = shuffled.slice(0, Math.min(numExercises, exercises.length));
    
    // Fetch details for each selected exercise
    const workoutExercises = await Promise.all(
        selectedExercises.map(async (exercise) => {
            const details = await fetchExerciseDetails(exercise.id);
            if (!details) return null;
            
            // Get the English translation if available
            const translation = details.translations.find(t => t.language === 2) || details.translations[0];
            
            return {
                id: exercise.id,
                name: translation ? translation.name : 'Unknown Exercise',
                description: translation ? translation.description : 'No description available',
                category: details.category.name,
                equipment: details.equipment.map(e => e.name).join(', '),
                sets: getRecommendedSets(difficulty),
                reps: getRecommendedReps(difficulty)
            };
        })
    );
    
    // Filter out any null values
    return workoutExercises.filter(exercise => exercise !== null);
}

// Helper function to get recommended sets based on difficulty
function getRecommendedSets(difficulty) {
    switch (difficulty) {
        case 'beginner':
            return '3';
        case 'intermediate':
            return '4';
        case 'advanced':
            return '5';
        default:
            return '3';
    }
}

// Helper function to get recommended reps based on difficulty
function getRecommendedReps(difficulty) {
    switch (difficulty) {
        case 'beginner':
            return '10-12';
        case 'intermediate':
            return '12-15';
        case 'advanced':
            return '15-20';
        default:
            return '12-15';
    }
}

// Export functions for use in other files
window.WgerAPI = {
    getAllExercises,
    getAllCategories,
    getAllMuscles,
    getExercisesByCategory,
    getExercisesByMuscle,
    getExercisesByEquipment,
    getRandomWorkout
}; 