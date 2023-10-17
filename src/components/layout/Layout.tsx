import styles from './_Layout.module.scss'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className={styles['layout']}>
            {children}
        </main>
    )
}