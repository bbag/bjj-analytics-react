import { ClassObj, Injuries, Severity } from '@/store/slices/classesSlice.ts'

/**
 * Generates random class data to be used for testing.
 * 
 * @returns An array of randomly generated class objects.
 */
export function generateRandomClassData() {
    const classTypes = [
        'gi',
        'no-gi',
        'open-mat'
    ]

    const injuriesList = [
        'abdomen',
        'ankle-l',
        'ankle-r',
        'back-upper',
        'back-lower',
        'bicep-l',
        'bicep-r',
        'calf-l',
        'calf-r',
        'chest-l',
        'chest-r',
        'ear-l',
        'ear-r',
        'elbow-l',
        'elbow-r',
        'foot-l',
        'foot-r',
        'forearm-l',
        'forearm-r',
        'groin',
        'hamstring-l',
        'hamstring-r',
        'hand-l',
        'hand-r',
        'head',
        'hip-l',
        'hip-r',
        'jaw',
        'knee-l',
        'knee-r',
        'neck',
        'quad-l',
        'quad-r',
        'ribs-l',
        'ribs-r',
        'shin-l',
        'shin-r',
        'shoulder-l',
        'shoulder-r',
        'wrist-l',
        'wrist-r'
    ]

    type InjuriesObj = {
        [key in keyof Injuries]?: Severity
    }
    
    // Get a random number between 50 and 140
    const numClasses = Math.floor(Math.random() * (140 - 50 + 1) + 50)

    // Get a random date between 2023-01-01 and 2023-10-13
    const startDate = new Date('2023-01-01').getTime()
    const endDate = new Date('2023-12-31').getTime()

    // Array to contain the newly generated classes
    const newClasses: ClassObj[] = []

    // Generate the classes and push them to the newClasses array
    for (let i = 0; i < numClasses; i++) {

        // Random date in [YYYY, M, D] format
        const randomDate = new Date(startDate + Math.random() * (endDate - startDate))
        const dateArray = [randomDate.getFullYear(), randomDate.getMonth(), randomDate.getDate()]

        console.log('dateArray', dateArray)

        const injuries: InjuriesObj = {}
        const numInjuries = Math.max(Math.floor(Math.random() * 5) - 3, 0)

        for (let j = 0; j < numInjuries; j++) {
            const injury = <keyof Injuries>injuriesList[Math.floor(Math.random() * injuriesList.length)]
            const severity = Math.random() < 0.75 ? 'mild' : Math.random() < 0.75 ? 'moderate' : 'severe'
            injuries[injury] = severity
        }

        const type = classTypes[Math.floor(Math.random() * classTypes.length)] as 'gi' | 'no-gi' | 'open-mat'

        const newClass: ClassObj = {
            id: Math.round(Math.random() * 1_000_000_000),
            date: [dateArray[0], dateArray[1], dateArray[2]],
            injuries,
            type
        }
        
        newClasses.push(newClass)
    }

    // Sort the classes by date
    newClasses.sort((a, b) => {
        const aDate = new Date(a.date[0], a.date[1], a.date[2])
        const bDate = new Date(b.date[0], b.date[1], b.date[2])
        return aDate.getTime() - bDate.getTime()
    })

    return newClasses
}