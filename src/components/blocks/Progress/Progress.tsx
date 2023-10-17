import { useSelector } from 'react-redux'
import { ClassObj } from '@/store/slices/classesSlice.ts'
import { daysPassedInYear, daysInYear } from './utils'

import styles from './_Progress.module.scss'

import Card from '@/components/ui/Card/Card.tsx'
import CardHeader from '@/components/ui/CardHeader/CardHeader.tsx'
import ClassDot from '@/components/ui/ClassDot/ClassDot'

interface ProgressBarProps {
    aside?: string
    children: React.ReactNode
    title: string
}

function ProgressBar({ aside, children, title }: ProgressBarProps) {
    return (
        <div>
            <div className={styles['progress-bar__title']}>
                <span>{title}</span>
                <span>{aside}</span>
            </div>
            <div className={styles['progress-bar']}>
                {children}
            </div>
        </div>
    )
}

interface ProgressFillProps {
    percent: number
    type?: 'gi' | 'no-gi' | 'open-mat'
}

function ProgressFill({ percent, type }: ProgressFillProps) {
    return (
        <div
            className={styles['progress-bar__fill']}
            data-type={type}
            style={{
                width: percent + '%'
            }}
            title={percent + '%'}
        ></div>
    )
}

export default function Progress() {
    const classes = useSelector((state: { classes: ClassObj[] }) => state.classes)

    const giClasses = classes.filter((c) => c.type === 'gi').length
    const noGiClasses = classes.filter((c) => c.type === 'no-gi').length
    const openMatClasses = classes.filter((c) => c.type === 'open-mat').length

    // [ ] TODO: replace this with a goal number of classes from the user
    const goal = 120

    function roundedPercent(num: number) {
        return Math.round(num * 1000) / 10
    }

    return (
        <Card>
            <CardHeader>Progress</CardHeader>
            <ProgressBar
                title="2023 Progress:"
                aside={`${daysPassedInYear(2023)} / ${daysInYear(2023)} (${roundedPercent(daysPassedInYear(2023) / daysInYear(2023))}%)`}
            >
                <ProgressFill percent={roundedPercent(daysPassedInYear(2023) / daysInYear(2023))} />
            </ProgressBar>
            <ProgressBar
                title="Year"
                aside={`${classes.length} / ${goal} (${roundedPercent(classes.length / goal)}%)`}
            >
                <ProgressFill type="gi" percent={roundedPercent(giClasses / goal)} />
                <ProgressFill type="no-gi" percent={roundedPercent(noGiClasses / goal)} />
                <ProgressFill type="open-mat" percent={roundedPercent(openMatClasses / goal)} />
            </ProgressBar>
            <div className={styles['progress-key']}>
                <span className={styles['progress-key__item']}>
                    <ClassDot type="gi" size="lg" />
                    Gi
                </span>
                <span className={styles['progress-key__item']}>
                    <ClassDot type="no-gi" size="lg" />
                    No-Gi
                </span>
                <span className={styles['progress-key__item']}>
                    <ClassDot type="open-mat" size="lg" />
                    Open Mat
                </span>
            </div>
        </Card>
    )
}