import styles from './_CardHeader.module.scss';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    aside?: string;
    children: React.ReactNode;
    className?: string;
}

export default function CardHeader({ aside, children, className, ...rest }: CardHeaderProps) {
    return (
        <header className={styles['card-header']} {...rest}>
            <h2 className={styles['card-header__title']}>{children}</h2>
            {aside &&
                <span className={styles['card-header__aside']}>
                    {aside}
                </span>
            }
        </header>
    )
}