import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * @param {number} id
 * @param {string} date
 * @param {Injuries} injuries
 * @param {type} type
 */
export interface ClassObj {
    /** The unique ID for this class item (uses Date.getTime() to generate the ID) */
    id: number
    /** Date as an array (format `[YYYY, M, D]`) so it's easy to store & parse as JSON. */
    date: [number, number, number]
    /** List of any injuries sustained in this class. */
    injuries: Injuries
    /** The type of class taken. */
    type: 'gi' | 'no-gi' | 'open-mat'
}

export interface Injuries {
    'abdomen'?: Severity
    'ankle-l'?: Severity
    'ankle-r'?: Severity
    'back-upper'?: Severity
    'back-lower'?: Severity
    'bicep-l'?: Severity
    'bicep-r'?: Severity
    'calf-l'?: Severity
    'calf-r'?: Severity
    'chest-l'?: Severity
    'chest-r'?: Severity
    'ear-l'?: Severity
    'ear-r'?: Severity
    'elbow-l'?: Severity
    'elbow-r'?: Severity
    'foot-l'?: Severity
    'foot-r'?: Severity
    'forearm-l'?: Severity
    'forearm-r'?: Severity
    'groin'?: Severity
    'hamstring-l'?: Severity
    'hamstring-r'?: Severity
    'hand-l'?: Severity
    'hand-r'?: Severity
    'head'?: Severity
    'hip-l'?: Severity
    'hip-r'?: Severity
    'jaw'?: Severity
    'knee-l'?: Severity
    'knee-r'?: Severity
    'neck'?: Severity
    'quad-l'?: Severity
    'quad-r'?: Severity
    'ribs-l'?: Severity
    'ribs-r'?: Severity
    'shin-l'?: Severity
    'shin-r'?: Severity
    'shoulder-l'?: Severity
    'shoulder-r'?: Severity
    'wrist-l'?: Severity
    'wrist-r'?: Severity
}

export type Severity = 'mild' | 'moderate' | 'severe'

export type ClassesRootState = ReturnType<typeof classesSlice.reducer>

const initialState: ClassObj[] = [
    {
        id: 1696987715445,
        date: [2023, 8, 10],
        injuries: {
            'elbow-l': 'mild',
        },
        type: 'gi'
    },
    {
        id: 1696987917686,
        date: [2023, 8, 13],
        injuries: {
            'elbow-l': 'moderate',
            'wrist-l': 'mild'
        },
        type: 'gi'
    },
    {
        id: 1696987918667,
        date: [2023, 8, 14],
        injuries: {},
        type: 'no-gi'
    },
    {
        id: 1696987918468,
        date: [2023, 8, 14],
        injuries: {},
        type: 'no-gi'
    },
    {
        id: 1696988153279,
        date: [2023, 8, 19],
        injuries: {},
        type: 'gi'
    },
    {
        id: 1696989059520,
        date: [2023, 9, 2],
        injuries: {
            'ribs-l': 'severe'
        },
        type: 'open-mat'
    },
]

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        /** Adds a new class to the classes array, sorted by date. */
        addClass: (state, action: PayloadAction<ClassObj>) => {
            // Find the index to insert at
            let i = 0
            while (
                i < state.length
                && new Date(action.payload.date.join()) >= new Date(state[i].date.join())
            ) {
                i ++
            }

            // Insert the new class at the index
            state.splice(i, 0, action.payload)
        },
        /** Removes a class based on its ID. */
        removeClass: (state, action: PayloadAction<{ id: number }>) => {
            const index = state.findIndex((c) => c.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        /** Completely replaces the existing array of classes with a new array (used when generating random classes). */
        replaceClasses: (state, action: PayloadAction<{ newData: ClassObj[] }>) => {
            const n = Math.max(state.length, action.payload.newData.length)
            for (let i = 0; i < n; i++) {
                state.length = 0
                state.push(...action.payload.newData)
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addClass, removeClass, replaceClasses } = classesSlice.actions

export default classesSlice.reducer
