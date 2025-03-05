import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useScrollReveal } from './ScrollReveal';

const generateAnalyticsData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    data.push({
      hour: `${i}:00`,
      users: Math.floor(Math.random() * 1000),
      sessions: Math.floor(Math.random() * 1500),
      conversions: Math.floor(Math.random() * 100)
    });
  }
  return data;
};

export const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(generateAnalyticsData());
  const [selectedMetric, setSelectedMetric] = useState('users');
  const scrollRef = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(generateAnalyticsData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const metrics = {
    users: { color: '#4F46E5', label: 'Active Users' },
    sessions: { color: '#9333EA', label: 'Sessions' },
    conversions: { color: '#06B6D4', label: 'Conversions' }
  };

  return (
    <div className="analytics-container" ref={scrollRef}>
      <div className="analytics-header reveal fade-down">
        <h2>Real-time Analytics</h2>
        <div className="metric-selector">
          {Object.entries(metrics).map(([key, { label, color }]) => (
            <button
              key={key}
              className={`metric-button ${selectedMetric === key ? 'active' : ''}`}
              style={{ '--metric-color': color }}
              onClick={() => setSelectedMetric(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="analytics-grid reveal fade-up">
        <div className="analytics-card">
          <h3>Current {metrics[selectedMetric].label}</h3>
          <div className="analytics-value">
            {analyticsData[analyticsData.length - 1][selectedMetric]}
          </div>
        </div>
        <div className="analytics-card">
          <h3>Peak Today</h3>
          <div className="analytics-value">
            {Math.max(...analyticsData.map(d => d[selectedMetric]))}
          </div>
        </div>
        <div className="analytics-card">
          <h3>Average</h3>
          <div className="analytics-value">
            {Math.floor(analyticsData.reduce((acc, curr) => acc + curr[selectedMetric], 0) / analyticsData.length)}
          </div>
        </div>
      </div>

      <div className="analytics-chart reveal fade-right">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke={metrics[selectedMetric].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}; 