import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjE2MjgwLCJpYXQiOjE3MzA1ODYyODAsImp0aSI6IjhiNDdmMTJjZGUyOTRiMWRhNWE5YTQ3YjQ5MDAzNTM5IiwidXNlcl9pZCI6Mn0.s2GNNfyBnI7fzALO56degfHKh5yw2ioW8a6kS3goQfM";

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
        return rejectWithValue(error.message)
        } else
            return rejectWithValue("An Unexpected Error")
    }
  }
);

export default getSubjects

