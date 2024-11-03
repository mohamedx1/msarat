import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjY2OTE0LCJpYXQiOjE3MzA2MzY5MTQsImp0aSI6IjExZWRiNTU5ZmJjMDRmYTdhMmQ3ZjM5MWU2NTA1Y2I3IiwidXNlcl9pZCI6Mn0.1NzsKmSTnc5SeAjtyHkYELMmb091OBDykrQ3EBJO_F8";

type respose = {id:string , code:string , description:string , name:string ,    is_active:boolean , progress:number ,   academic_year:string    }[]
const getSubjects = createAsyncThunk("subjects/getSubjects", async (token:string, thunkAPI) => {

  const { rejectWithValue } = thunkAPI
  try {
    console.log(`${token} this form act Sub`)
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

