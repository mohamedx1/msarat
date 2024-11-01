import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNTIwOTEzLCJpYXQiOjE3MzA0OTA5MTMsImp0aSI6IjA4ZjkxODgwZjgzYjQzNTlhNTIwZDljNzEyMjNlZDRhIiwidXNlcl9pZCI6Mn0.579rFtl4ITAQJGf_yaoy07rr9f5eJY19YvyKDTzPAB8"

type respose = {id:string , code:string , description:string , name:string ,    is_active:boolean , progress:number ,   academic_year:string    }[]
const getSubjects = createAsyncThunk("subjects/getSubjects", async (_, thunkAPI) => {
    const {rejectWithValue} =thunkAPI
    try {
        const response = await axios.get<respose>("http://127.0.0.1:8000/cms/subjects/" , {headers:{
        Authorization: `Bearer ${token}`,
      },
    });
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

