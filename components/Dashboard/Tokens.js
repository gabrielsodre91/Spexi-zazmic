import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useScrollReveal } from './ScrollReveal';

const generateTokenData = () => {
  return [
    { name: 'BTC', value: Math.random() * 50000, change: (Math.random() * 10 - 5).toFixed(2) },
    { name: 'ETH', value: Math.random() * 3000, change: (Math.random() * 10 - 5).toFixed(2) },
    { name: 'SOL', value: Math.random() * 100, change: (Math.random() * 10 - 5).toFixed(2) },
    { name: 'DOT', value: Math.random() * 50, change: (Math.random() * 10 - 5).toFixed(2) },
    { name: 'AVAX', value: Math.random() * 80, change: (Math.random() * 10 - 5).toFixed(2) }
  ];
};

export const Tokens = () => {
  const [tokenData, setTokenData] = useState(generateTokenData());
  const scrollRef = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setTokenData(generateTokenData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tokens-container" ref={scrollRef}>
      <div className="tokens-header reveal fade-down">
        <h2>Digital Tokens</h2>
        <div className="token-stats">
          <div className="token-stat">
            <span>Total Value</span>
            <h3>${(Math.random() * 1000000).toFixed(2)}</h3>
          </div>
          <div className="token-stat">
            <span>24h Change</span>
            <h3 className={Math.random() > 0.5 ? 'positive' : 'negative'}>
              {(Math.random() * 10 - 5).toFixed(2)}%
            </h3>
          </div>
        </div>
      </div>

      <div className="tokens-grid reveal fade-up">
        {tokenData.map((token) => (
          <div key={token.name} className="token-card">
            <div className="token-info">
              <img src={`/tokens/${token.name.toLowerCase()}.svg`} alt={token.name} />
              <div>
                <h4>{token.name}</h4>
                <p>${token.value.toFixed(2)}</p>
              </div>
            </div>
            <span className={`token-change ${token.change > 0 ? 'positive' : 'negative'}`}>
              {token.change}%
            </span>
          </div>
        ))}
      </div>

      <div className="token-chart reveal fade-right">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={tokenData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}; 