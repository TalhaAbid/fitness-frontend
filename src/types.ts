
export interface WorkoutItemType extends SetsType {
    weight: number;
}

export interface ExerciseItemPropTypes {
    exercise: BodyWeightWorkoutType | WorkoutItemType;
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
    imageSrc?: string;
}


export interface ExerciseProps {
    exercise: ExerciseType
}


export interface NavItemProps {
    path: string;
    title: string;
};

export type callbackFunction = () => void;

export type useInterval = (callBack: callbackFunction, delay: number | null) => void;

export enum STATUS {
    STARTED,
    STOPPED,
}
