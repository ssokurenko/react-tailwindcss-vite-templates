interface MainProps {
    children?: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    return (
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center vh-screen min-h-screen">
            {children}
        </main>
    )
}

export default Main