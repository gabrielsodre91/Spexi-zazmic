import { ScrollReveal } from '../ScrollReveal'
import Image from 'next/image'

export const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <ScrollReveal>
          <div className="partners-logos">
            <a href="https://www.dell.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/dell-logo.png" alt="Dell" width={120} height={45} />
            </a>
            <a href="https://www.zendesk.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/zendesk-logo.png" alt="Zendesk" width={120} height={45} />
            </a>
            <a href="https://www.rakuten.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/rakuten-logo.png" alt="Rakuten" width={120} height={45} />
            </a>
            <a href="https://www.pacificlife.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/pacific-funds-logo.png" alt="Pacific Funds" width={120} height={45} />
            </a>
            <a href="https://www.ncr.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/ncr-logo.png" alt="NCR" width={120} height={45} />
            </a>
            <a href="https://www.lattice.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/lattice-logo.png" alt="Lattice" width={120} height={45} />
            </a>
            <a href="https://www.ted.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/ted-logo.png" alt="TED" width={120} height={45} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="features-content text-center">
            <h2 className="features-title">
              Marketing<br />
              Analytics &<br />
              Insights for the<br />
              Insurance,<br />
              Financial, and<br />
              Real Estate<br />
              sectors
            </h2>
            <p className="features-description">
              Check out our amazing features and experience the power of Vaultflow for yourself.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 