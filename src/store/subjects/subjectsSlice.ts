import { createSlice , } from "@reduxjs/toolkit";
import getSubjects from "./act/actAllSubjects"



interface SubjectState {
  subjects: {id:string , code:string , description:string , name:string ,   is_active:boolean ,  progress:number ,  academic_year:string  }[]; //
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null;
}



const initialState: SubjectState = {
  subjects: [],
  isLoading: "idle",
  error: null,
};

const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSubjects.pending, (state) => {
      state.isLoading = "pending";
      state.error = null;
    })
    builder.addCase(getSubjects.fulfilled, (state , action) => {
      state.isLoading = "succeeded";
      state.error = null;
      state.subjects = action.payload;
    })
    builder.addCase(getSubjects.rejected, (state , action) => {
      state.isLoading = "failed";
        state.error = action.payload as string;
    })
  },
});
export { getSubjects };

export default subjectsSlice.reducer;
