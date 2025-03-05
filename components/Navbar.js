import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Vaultflow</h1>
      </div>
      
      <div className="navbar-right">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About us</a>
        <button className="button is-primary">Create Report</button>
        <button className="button is-secondary">Talk to an expert</button>
      </div>
    </nav>
  )
} 