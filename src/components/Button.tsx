interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children = 'Click Me' }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        onClick={onClick}>
        {children}
    </button>
  )
}

export default Button