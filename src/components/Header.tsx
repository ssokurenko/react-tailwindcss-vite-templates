

const Header = ({title = 'React Vite Template'}: {title?: string}) => {
  return (
    <header className="text-white p-4">
      <h1 className="text-4xl font-bold">{title}</h1>
    </header>
  )
}

export default Header