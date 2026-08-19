interface FooterProps {
  year?: string,
  company?: string
}   

const Footer = ({ year = "2026", company = "Your Company" }: FooterProps) => {
    return (
        <footer className="text-white p-4">
            <p>Copyright © {year} {company}. All rights reserved.</p>
        </footer>
    )
}

export default Footer