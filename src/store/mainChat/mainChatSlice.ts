import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getMainChat from './act/actMainChat';



interface BootResponse {
    message: string;
    content: Question[];
    isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

interface Question {
    id: string;
    lesson: string;
    topic: string;
    learning_phase: LearningPhase;
    blooms_level: BloomsLevel;
    learning_type: LearningType;
    question_text: string;
    question_type: QuestionType;
    difficulty: Difficulty;
    created_at: string;
    updated_at: string;
    cause: string | null;
    question_location_in_video: string | null;
    true_false_question?: TrueFalseQuestion;
    long_answer_question?: LongAnswerQuestion;
    sorting_question?: SortingQuestion;
    mcq_question?: MultipleChoiceQuestion;
    audio_base64: string;
    combined_audio_base64?: string;
}

type LearningPhase = "INTRO_EXAM" | string;
type BloomsLevel = "UNDERSTAND" | "EVALUATE" | "ANALYZE" | "REMEMBER" | string;
type LearningType = "Visual" | string;
type QuestionType = "TRUE_FALSE" | "LONG_ANSWER" | "SORTING" | "MULTIPLE_CHOICE" | string;
type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | string;

interface TrueFalseQuestion {
    id: string;
    correct_answer: boolean;
    question: string;
}

interface LongAnswerQuestion {
    id: string;
    correct_answer: string;
    question: string;
}

interface SortingQuestion {
    id: string;
    correct_order: string[];
    question: string;
}

interface MultipleChoiceQuestion {
    id: string;
    choices: Choice[];
    correct_answer: string;
    question: string;
}

interface Choice {
    [key: string]: string;
}






const initialState: BootResponse = {
    message: " ",
    content: [
        {
            id: "",
            lesson: "",
            topic: "",
            learning_phase: "",
            blooms_level: "",
            learning_type: "",
            question_text: "",
            question_type: "",
            difficulty: "",
            created_at: "",
            updated_at: "",
            cause: null,
            question_location_in_video: null,
            true_false_question: {
                id: "",
                correct_answer: true,
                question: ""
            },
            audio_base64: ""
        }
        // Add more question objects as needed
    ],
    isLoading: 'idle' ,
    error: null,
};

const mainChatSlice = createSlice({
  name: "mainChat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getMainChat.pending, (state) => {
            state.isLoading = "pending";
            state.error = null;
        });
        builder.addCase(getMainChat.fulfilled, (state, action: any) => {
            state.isLoading = "succeeded";
            state.error = null;
            state.message = action.payload.message;
            state.content = action.payload.content;
            console.log(action.payload);
        });
        builder.addCase(getMainChat.rejected, (state, action: any) => {
            state.isLoading = "failed";
            state.error = action.payload ?? "An error occurred";
            console.log(action.payload);
        });
    },
});
export { getMainChat };

export default mainChatSlice.reducer;
