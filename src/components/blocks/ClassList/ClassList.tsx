import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addClass, ClassObj, removeClass, replaceClasses } from '@/store/slices/classesSlice.ts'
import { generateRandomClassData } from '@/utils/generateRandomClassData.ts'

// Components
import Card from '@/components/ui/Card/Card.tsx'
import CardHeader from '@/components/ui/CardHeader/CardHeader.tsx'
import ClassDot from '@/components/ui/ClassDot/ClassDot.tsx'

// Styles
import styles from './_ClassList.module.scss'

// Utils
import { format } from 'date-fns'

export default function ClassList() {
    const dispatch = useDispatch()
    const classes = useSelector((state: { classes: ClassObj[] }) => state.classes)
    const [newClassType, setNewClassType] = useState<'gi' | 'no-gi' | 'open-mat'>('gi')

    const newClassDate = useRef<HTMLInputElement>(null)

    const totalClasses = classes.length

    function handleAddClass() {
        
        // Date in [YYYY, M, D] format
        const dateArray = newClassDate.current?.value.split('-').map((n) => parseInt(n))

        // If the date is invalid, don't add the class
        if (!dateArray) {
            return
        }

        // Otherwise, add the class (with a 0-indexed month)
        dispatch(addClass({
            id: new Date().getTime(), // Unique ID based on current time in milliseconds (not totally perfect, but good enough here)
            date: [dateArray[0], dateArray[1] - 1, dateArray[2]],
            type: newClassType,
            injuries: {},
        }))
    }

    function handleRemoveClass(id: number) {
        dispatch(removeClass({id}))
    }

    function handleEditClass(id: number) {
        console.log('edit class ', id)
    }

    function handleGenerateRandomClassData() {
        dispatch(replaceClasses({ newData: generateRandomClassData() }))
    }

    function formattedDateFromArray(dateArray: number[]) {
        return format(new Date(dateArray[0], dateArray[1], dateArray[2]), 'MMM. do, yyyy')
    }

    function handleClassTypeChange(value: string) {
        if (['gi', 'no-gi', 'open-mat'].includes(value)) {
            setNewClassType(value as 'gi' | 'no-gi' | 'open-mat')
        }
    }

    return (
        <Card>
            <CardHeader aside={`Total: ${totalClasses}`}>Classes Taken</CardHeader>
            <table>
                <tbody>
                    <tr className={styles['class-item']}>
                        <th>Type</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    {classes.map((c) => (
                        <tr className={styles['class-item']} key={c.id}>
                            <td>
                                <span className="items-center gap-2">
                                    <ClassDot type={c.type} />
                                    {c.type === 'gi'
                                        ? 'Gi'
                                        : c.type === 'no-gi'
                                            ? 'No-gi'
                                            : 'Open mat'
                                    }
                                </span>
                            </td>
                            <td>{formattedDateFromArray(c.date)}</td>
                            <td>
                                <button onClick={() => handleEditClass(c.id)}>Edit</button>
                                <button onClick={() => handleRemoveClass(c.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <select defaultValue={newClassType} onChange={(e) => handleClassTypeChange(e.target.value)}>
                    <option value="gi">Gi</option>
                    <option value="no-gi">No-gi</option>
                    <option value="open-mat">Open mat</option>
                </select>
                <input ref={newClassDate} type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                <button className={styles['add-button']} onClick={handleAddClass}>Add Class</button>
            </div>
            <button className={styles['corner-button']} onClick={handleGenerateRandomClassData}>Generate Random Classes</button>
            {/* <hr />
            <pre>
                {JSON.stringify(classes, null, 4)}
            </pre> */}
        </Card>
    )
}