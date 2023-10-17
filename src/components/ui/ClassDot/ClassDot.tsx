import styles from './_ClassDot.module.scss'

interface Props {
    size?: 'sm' | 'md' | 'lg'
    type: string
}

export default function ClassDot({ size, type }: Props) {
    const sizeClass = (
        size === 'sm' ||
        size === 'lg'
    )
        ? styles[`size-${size}`]
        : ''

    const typeClass = styles[`type-${type}`]

    return (
        <span
            className={`${styles['class-dot']} ${sizeClass} ${typeClass}`}
            title={type === 'gi'
                ? 'Gi'
                : type === 'no-gi'
                    ? 'No-gi'
                    : 'Open mat'
                }
        ></span>
    )
}