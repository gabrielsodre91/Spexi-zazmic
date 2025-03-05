import Image from 'next/image'
import { ScrollReveal } from '../ScrollReveal'
import { Dashboard } from '../Dashboard/Dashboard'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="notification-banner">
        Extracting valuable insights from Imagery
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Spexi Property Intel AI
        </h1>
        
        <p className="hero-subtitle">
          Built upon the largest and most recent high-resolution imagery,<br />
          actionable insights at your fingertips
        </p>

        <div className="hero-form">
          <input 
            type="text" 
            placeholder="9999 Albert St, Colorado"
            className="hero-input"
          />
          <select 
            className="hero-select"
            defaultValue=""
          >
            <option value="" disabled>Report Type (default)</option>
            <option value="basic">Basic Report</option>
            <option value="standard">Standard Report</option>
            <option value="premium">Premium Report</option>
            <option value="custom">Custom Report</option>
          </select>
          <button 
            className="button is-primary get-report"
            onClick={() => console.log('Report requested')}
          >
            Get Report
          </button>
        </div>

        <ScrollReveal delay={0.4}>
          <Dashboard />
        </ScrollReveal>
      </div>
    </div>
  )
} 