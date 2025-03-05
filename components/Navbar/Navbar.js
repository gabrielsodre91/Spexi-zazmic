import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="brand-logo">Spexi</div>
        </div>
        
        <div className="navbar-right">
          <div className="navbar-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about-us">About us</a>
          </div>

          <div className="navbar-buttons">
            <button className="btn-create">Create Report</button>
            <button className="btn-expert">Talk to an expert</button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 