import { Severity } from '@/store/slices/classesSlice.ts'

/** Severity level values (mild, moderate, or severe) for injuries. */
export const injuryValues: Record<Severity, number> = {
    'mild': 1,
    'moderate': 3,
    'severe': 7,
}