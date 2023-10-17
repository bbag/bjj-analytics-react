// more redux stuff at:
// https://www.youtube.com/watch?v=u3KlatzB7GM&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo

import { configureStore } from '@reduxjs/toolkit'
import classesSlice from './slices/classesSlice'

export const store = configureStore({
    reducer: {
        classes: classesSlice
    }
})