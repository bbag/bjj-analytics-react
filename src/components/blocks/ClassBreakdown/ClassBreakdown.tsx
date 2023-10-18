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
    title: string
    total: number
    type: 'gi' | 'no-gi' | 'open-mat'
}

function DonutSlice({ count, rotation, strokeDashoffset, title, total, type }: DonutSliceProps) {
    // console.log(`offset:${strokeDashoffset} + rot:${rotation} = ${strokeDashoffset + rotation}`)

    return (
        <circle
            className={styles['donut-segment']}
            cx={SVG_VIEWBOX / 2}
            cy={SVG_VIEWBOX / 2}
            r={SVG_VIEWBOX / 2 - (SVG_STROKE_WIDTH + 100) / 2}
            pathLength="100"
            data-type={type}
            style={{
                // strokeWidth: SVG_STROKE_WIDTH,
                strokeDashoffset,
                transform: `rotate(${rotation}deg)`,
            } as CSSProperties}
        >
            <title>{`${title}: ${count} classes (${Math.round(count / total * 100000) / 1000 + '%'})`}</title>
        </circle>
    )
}

export default function ClassBreakdown() {
    type ClassType = 'gi' | 'no-gi' | 'open-mat'
    const classes = useSelector((state: { classes: ClassObj[] }) => state.classes)
    const donutValues = [
        {
            type: 'gi' as ClassType,
            title: 'Gi',
            count: classes.filter((c) => c.type === 'gi').length,
            rotation: 0,
        },
        {
            type: 'no-gi' as ClassType,
            title: 'No-Gi',
            count: classes.filter((c) => c.type === 'no-gi').length,
            rotation: 0,
        },
        {
            type: 'open-mat' as ClassType,
            title: 'Open Mat',
            count: classes.filter((c) => c.type === 'open-mat').length,
            rotation: 0,
        }
    ]

    // Calculate the rotation offset of each donut slice
    let cumulativeRotation = -30 - (donutValues[0].count / classes.length * 360) / 2
    
    return (
        <Card>
            <CardHeader>Class Breakdown</CardHeader>
            <figure className={styles['class-breakdown']}>
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
                                total={classes.length}
                                title={donutSlice.title}
                            />
                        )
                    })}
                </svg>
                <figcaption className={styles['donut-key']}>
                    {donutValues.map((donutSlice, i) => {
                        const percent = Math.round(donutSlice.count / classes.length * 1000) / 10
                        return (
                            <div className={styles['donut-key__item']} key={i}>
                                <ClassDot type={donutSlice.type} size="lg" />
                                <span>{donutSlice.title} <span className={styles['donut-key__percent']}>({percent}%)</span></span>
                            </div>
                        )
                    })}
                </figcaption>
            </figure>
        </Card>
    )
}