import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



type respose = {id:string , code:string , description:string , name:string ,    is_active:boolean , progress:number ,   academic_year:string    }[]
const getSubjects = createAsyncThunk("subjects/getSubjects", async (token:string, thunkAPI) => {

  const { rejectWithValue } = thunkAPI
  try {
    console.log(`${token} this form act Sub`)
        const response = await axios.get<any>("https://localhost:8000/cms/subjects_with_lessons" , {headers:{
        Authorization: `Bearer ${token}`,
      },
        });

    const data = response.data;
    console.log(`${response} this form act data Sub`)
        return data;
    } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log(error)
        return rejectWithValue(error.message)
        } else
            return rejectWithValue("An Unexpected Error")
    }
  }
);

export default getSubjects

