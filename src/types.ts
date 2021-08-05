
export interface WorkoutItemType extends SetsType {
    weight: number;
}

export interface BodyWeightWorkoutType extends SetsType {
}

export interface SetsType extends ExerciseType {
    sets: number;
    reps: number;
    timePerSet: number;
}

export interface ExerciseType {
    name: string;
    target: string;
    imageSrc: string;
}


export interface ExerciseProps {
    exercise: ExerciseType
}
