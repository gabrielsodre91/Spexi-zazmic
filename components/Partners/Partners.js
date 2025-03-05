import Image from 'next/image'
import { ScrollReveal } from '../ScrollReveal'

export const Partners = () => {
  return (
    <div className="partners-section">
      <p className="partners-title">Trusted by teams at over 1000 of the world's leading organizations</p>
      <ScrollReveal>
        <div className="partners-grid">
          <div className="partners-row">
            <Image src="/images/dell.svg" alt="Dell" width={80} height={28} />
            <Image src="/images/zendesk.svg" alt="Zendesk" width={100} height={28} />
            <Image src="/images/rakuten.svg" alt="Rakuten" width={80} height={28} />
            <Image src="/images/pacific-funds.svg" alt="Pacific Funds" width={100} height={28} />
            <Image src="/images/ncr.svg" alt="NCR" width={80} height={28} />
            <Image src="/images/lattice.svg" alt="Lattice" width={90} height={28} />
          </div>
          <div className="partners-row-center">
            <Image src="/images/ted.svg" alt="TED" width={80} height={28} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
} 