import { CSSProperties, SVGProps } from 'react'
import { useSelector } from 'react-redux'
import { ClassObj } from '@/store/slices/classesSlice.ts'

// Styles
import styles from './_ClassBreakdown.module.scss'

// Components
import Card from '@/components/ui/Card/Card.tsx'
import CardHeader from '@/components/ui/CardHeader/CardHeader.tsx'
import ClassDot from '@/components/ui/ClassDot/ClassDot'

const SVG_VIEWBOX = 2048
const SVG_STROKE_WIDTH = 384

interface DonutSliceProps {
    count: number
    rotation: number
    strokeDashoffset: number
    type: 'gi' | 'no-gi' | 'open-mat'
}

function DonutSlice({ count, rotation, strokeDashoffset, type }: DonutSliceProps) {
    console.log(`offset:${strokeDashoffset} + rot:${rotation} = ${strokeDashoffset + rotation}`)

    return (
        <circle
            className={styles['donut-segment']}
            cx={SVG_VIEWBOX / 2}
            cy={SVG_VIEWBOX / 2}
            r={SVG_VIEWBOX / 2 - SVG_STROKE_WIDTH / 2}
            pathLength="100"
            data-type={type}
            style={{
                strokeWidth: SVG_STROKE_WIDTH,
                strokeDashoffset,
                transform: `rotate(${rotation}deg)`,
            } as CSSProperties}
        >
            <title>{count} - {count / 6 * 100 + '%'}</title>
        </circle>
    )
}

export default function ClassBreakdown() {
    const classes = useSelector((state: { classes: ClassObj[] }) => state.classes)

    // const giClasses = classes.filter((c) => c.type === 'gi').length
    // const noGiClasses = classes.filter((c) => c.type === 'no-gi').length
    // const openMatClasses = classes.filter((c) => c.type === 'open-mat').length

    type ClassType = 'gi' | 'no-gi' | 'open-mat'
    let classTypesArray: ClassType[] = [
        'gi',
        'no-gi',
        'open-mat'
    ]

    // interface DonutValues {
    //     type: ClassType
    //     percent: number
    //     rotation: number
    // }

    // const donutValues: DonutValues[] = []

    
    // classTypesArray.forEach((type: ClassType) => {
    //     const percent = classes.filter((c) => c.type === type).length / classes.length * 100
    //     const rotation = donutValues.reduce((acc, curr) => acc + curr.percent, 0) * 3.6

    //     donutValues.push({ type, percent, rotation })
    // })

    // console.log('donutValues', donutValues)

    // // const donutValues = [
    // //     {
    // //         type: 'gi',
    // //         percent: giClasses / classes.length,
    // //     },
    // //     {
    // //         type: 'no-gi',
    // //         percent: noGiClasses / classes.length,
    // //     },
    // //     // {
    // //     //     type: 'open-mat',
    // //     //     percent: openMatClasses / classes.length,
    // //     // },
    // // ]

    // // function calcDonutSegmentRotation(index: number) {
    // //     let initialRotation = 0
    // //     let result = 0

    // //     for (let i = 1; i <= index; i++) {
    // //         result += donutValues[i - 1].percent * 360
    // //     }

    // //     console.log('result', result)
    // //     return result - initialRotation
    // // }

    const donutValues = [
        {
            type: 'gi' as ClassType,
            count: classes.filter((c) => c.type === 'gi').length,
            rotation: 0,
        },
        {
            type: 'no-gi' as ClassType,
            count: classes.filter((c) => c.type === 'no-gi').length,
            rotation: 0,
        },
        {
            type: 'open-mat' as ClassType,
            count: classes.filter((c) => c.type === 'open-mat').length,
            rotation: 0,
        }
    ]

    let cumulativeRotation = -30 - (donutValues[0].count / classes.length * 360) / 2
    
    // donutValues.forEach((donutSlice, i) => {
    //     donutSlice.rotation = cumulativeRotation
    //     cumulativeRotation += donutSlice.count / classes.length * 360
    // })

    return (
        <Card>
            <CardHeader>Class Breakdown</CardHeader>
            <div className={styles['class-breakdown']}>
                <svg viewBox={`0 0 ${SVG_VIEWBOX} ${SVG_VIEWBOX}`}>
                    {donutValues.map((donutSlice, i) => {
                        const strokeDashoffset = 100 - (donutSlice.count / classes.length * 100)
                        donutSlice.rotation = cumulativeRotation
                        cumulativeRotation += donutSlice.count / classes.length * 360

                        return (
                            <DonutSlice
                                key={i}
                                type={donutSlice.type}
                                strokeDashoffset={strokeDashoffset}
                                rotation={donutSlice.rotation}
                                count={donutSlice.count}
                            />
                        )
                    })}
                </svg>
            </div>
        </Card>
    )
}