export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src="/spexi-logo.svg" alt="Spexi" className="header-logo" />
          <h1 className="header-title">Spexi</h1>
        </div>
        
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a href="#about">About us</a>
          <button className="btn-create">Create Report</button>
          <button className="btn-expert">Talk to an expert</button>
        </nav>
      </div>
      
      <div className="header-banner">
        <p className="banner-text">Extracting valuable insights from imagery</p>
        <h2 className="banner-title">Spexi Property Intel AI</h2>
        <p className="banner-subtitle">
          Built upon the largest and most recent high-resolution imagery,
          actionable insights at your fingertips
        </p>
      </div>
    </header>
  );
}; 