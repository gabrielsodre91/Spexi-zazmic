import { ScrollReveal } from '../ScrollReveal'

export const Brands = () => {
  return (
    <section className="section brands-section">
      <div className="container">
        <ScrollReveal>
          <h3 className="title is-4 has-text-centered mb-6">
            Trusted by teams at over 1,000 of the world's leading organizations
          </h3>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="columns is-multiline is-centered">
            {/* Adicione os logos das empresas aqui */}
            <div className="column is-2">
              <img src="/dell-logo.svg" alt="Dell" />
            </div>
            {/* Adicione os outros logos */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 