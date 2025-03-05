import { ScrollReveal } from '../ScrollReveal'
import Image from 'next/image'

export const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="features-grid">
          <ScrollReveal>
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Analytics Dashboard</h3>
              <p>Our Analytics Dashboard provides a clear and intuitive interface for monitoring your data in real-time. With automatic real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
              <a href="#" className="feature-link">View dashboard</a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Digital Credit Tokens</h3>
              <p>Reward your customers and incentivize engagement with our Digital Credit Tokens. Our flexible token system is designed to match your branding and we a flexible and scalable way to drive customer loyalty and encourage repeat business.</p>
              <a href="#" className="feature-link">View tokens</a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="code-collaboration">
            <div className="code-content">
              <div className="icon-wrapper">
                <i className="fas fa-code"></i>
              </div>
              <h3>Code collaboration</h3>
              <p>Our advanced code synchronization technology ensures that everyone's always working with the latest version. Know where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization features help keep your codebase secure and ensure that your data is consistent and reliable.</p>
              <a href="#" className="feature-link">View code collaboration</a>
            </div>
            <div className="code-preview">
              <pre className="code-block">
                <code>
                  {`function getTokenBalance() {
  const user = auth.currentUser();
  const balance = await tokens.getBalance(user.id);
  return balance;
}`}
                </code>
              </pre>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="cta-section">
            <h2>Our powerful analytics provides invaluable insights.</h2>
            <p>Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital Credit Tokens to reward your customers and incentivize engagement.</p>
            <button className="button is-primary">Download the app</button>
          </div>
        </ScrollReveal>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Contact</h4>
              <p>Work inquiries: work@vaultflow.com</p>
              <p>PR and speaking: press@vaultflow.com</p>
              <p>New business: newbusiness@vaultflow.com</p>
            </div>
            <div className="footer-column">
              <h4>Address</h4>
              <p>948 11th Street, Floor 2</p>
              <p>San Francisco, CA 94103</p>
            </div>
            <div className="footer-column">
              <h4>Careers</h4>
              <p>Careers@vaultflow.com</p>
            </div>
            <div className="footer-column">
              <h4>Social</h4>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Tik Tok</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2023 Vaultflow. All Rights Reserved.</p>
            <Image src="/images/vaultflow-logo.png" alt="Vaultflow" width={100} height={30} />
          </div>
        </div>
      </footer>
    </section>
  )
} 