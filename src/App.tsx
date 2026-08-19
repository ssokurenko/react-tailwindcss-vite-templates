import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen py-2">
      <Header />
      <Main>
        <p>Welcome to the React Vite Template</p>
      </Main>
      <Footer year="2026" company="Your Company" />
    </div>
  )
}