import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SelectedTimeObj {
    selectedDate: Date
    timeframe: 'ytd' | 'past-week' | 'past-month' | 'past-6-months' | 'past-year' | 'all-time'
}

const initialState: SelectedTimeObj = {
    selectedDate: new Date('2023-01-01'),
    timeframe: 'ytd'
}

export const selectedTimeSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        // addClass: (state, action: PayloadAction<ClassObj>) => {
        //     state.push(action.payload)
        // },
        // removeClass: (state, action: PayloadAction<{ id: number }>) => {
        //     const index = state.findIndex((c) => c.id === action.payload.id)
        //     if (index !== -1) {
        //         state.splice(index, 1)
        //     }
        // },
        // replaceClasses: (state, action: PayloadAction<{ newData: ClassObj[] }>) => {
        //     console.log('state', state)
        //     console.log('action.payload.newData', action.payload.newData)

        //     const n = Math.max(state.length, action.payload.newData.length)

        //     for (let i = 0; i < n; i++) {
        //         state.length = 0
        //         state.push(...action.payload.newData)
        //     }
        // }
    }
})

// Action creators are generated for each case reducer function
// export const { addClass, removeClass, replaceClasses } = selectedTimeSlice.actions
export const {  } = selectedTimeSlice.actions

export default selectedTimeSlice.reducer
