import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
type respose = {id:string , code:string , description:string , name:string ,    is_active:boolean , progress:number ,   academic_year:string    }[]
const getSubjects = createAsyncThunk("subjects/getSubjects", async (_, thunkAPI) => {
    const {rejectWithValue} =thunkAPI
    try {
        const response = await axios.get<respose>("http://localhost:3005/subjects");
        const data = response.data;
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else
            return rejectWithValue("An Unexpected Error")
    }
  }
);

export default getSubjects

