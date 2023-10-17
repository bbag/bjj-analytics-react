import styles from './_Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Card({
    children,
    ...rest
}: CardProps) {
    return (
        <section
            className={styles['card']}
            {...rest}
        >
            {children}
        </section>
    )
}