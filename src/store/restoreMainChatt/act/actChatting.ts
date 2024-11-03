import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface BootResponse {
    chat_id: string;
    messages: {id:string , sender_type:"system" , content:string}[];
}

// interface Question {
//     id: string;
//     lesson: string;
//     topic: string;
//     learning_phase: LearningPhase;
//     blooms_level: BloomsLevel;
//     learning_type: LearningType;
//     question_text: string;
//     question_type: QuestionType;
//     difficulty: Difficulty;
//     created_at: string;
//     updated_at: string;
//     cause: string | null;
//     question_location_in_video: string | null;
//     true_false_question?: TrueFalseQuestion;
//     long_answer_question?: LongAnswerQuestion;
//     sorting_question?: SortingQuestion;
//     mcq_question?: MultipleChoiceQuestion;
//     audio_base64: string;
//     combined_audio_base64?: string;
// }

// type LearningPhase = "INTRO_EXAM" | string;
// type BloomsLevel = "UNDERSTAND" | "EVALUATE" | "ANALYZE" | "REMEMBER" | string;
// type LearningType = "Visual" | string;
// type QuestionType = "TRUE_FALSE" | "LONG_ANSWER" | "SORTING" | "MULTIPLE_CHOICE" | string;
// type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | string;

// interface TrueFalseQuestion {
//     id: string;
//     correct_answer: boolean;
//     question: string;
// }

// interface LongAnswerQuestion {
//     id: string;
//     correct_answer: string;
//     question: string;
// }

// interface SortingQuestion {
//     id: string;
//     correct_order: string[];
//     question: string;
// }

// interface MultipleChoiceQuestion {
//     id: string;
//     choices: Choice[];
//     correct_answer: string;
//     question: string;
// }

// interface Choice {
//     [key: string]: string;
// }





// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjY3NzE0LCJpYXQiOjE3MzA2Mzc3MTQsImp0aSI6ImJhMDg2MDMzZjMwYjQ3NTdhNWIxY2E3OWMxZDg0Njk0IiwidXNlcl9pZCI6Mn0.fYZeQIR6ugWKyzHPW8chSQjdLA9FMTtqSnNZC5pYmNc";


const getRestoreChat = createAsyncThunk("restoreMainChat/getRestoreChat", async (token:string,thunkAPI) => {
    const {rejectWithValue} =thunkAPI
    try {
        const response = await axios.get<BootResponse>("http://127.0.0.1:8000/chats/retrieve-messages/?lesson_id=20ecc322-fbb4-46ca-abcf-edcfcb34d42f" ,{headers:{
        Authorization: `Bearer ${token}`,
      },
    });
      const data = response.data;
        return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
        } else
            return rejectWithValue("An Unexpected Error")
    }
  }
);

export default getRestoreChat

