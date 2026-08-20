interface HeaderProps {
    title?: string
    section?: React.ReactNode
}

const Header = ({ title = 'React Vite Template', section }: HeaderProps) => <header className="text-white p-4 flex items-center justify-between gap-4">
    <h1 className="text-4xl font-bold">{title}</h1>
    {section && <div className="flex items-center gap-4 mr-4">{section}</div>}
</header>

export default Header
