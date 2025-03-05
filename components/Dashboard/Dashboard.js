import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Função para gerar dados aleatórios dentro de um intervalo
const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Função para gerar dados iniciais
const generateInitialData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    name: month,
    value: generateRandomValue(14000000, 24000000),
    secondValue: generateRandomValue(14000000, 22000000)
  }));
};

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [data, setData] = useState(generateInitialData());
  const [totalVisits, setTotalVisits] = useState(19909660);
  const [activeUsers, setActiveUsers] = useState(4828);
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [isUpdating, setIsUpdating] = useState(false);

  // Atualiza os dados a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map(item => ({
        ...item,
        value: generateRandomValue(14000000, 24000000),
        secondValue: generateRandomValue(14000000, 22000000)
      }));
      setData(newData);
      setTotalVisits(generateRandomValue(19000000, 21000000));
      setActiveUsers(generateRandomValue(4000, 5000));
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  // Tooltip personalizado
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>This Month</p>
          <h3>{new Intl.NumberFormat().format(payload[0].value)}</h3>
          <p>{label}, 2023</p>
        </div>
      );
    }
    return null;
  };

  // Função para atualizar dados manualmente
  const handleRefreshData = () => {
    setIsUpdating(true);
    const newData = generateInitialData();
    setData(newData);
    setTotalVisits(generateRandomValue(19000000, 21000000));
    setActiveUsers(generateRandomValue(4000, 5000));
    setTimeout(() => setIsUpdating(false), 500);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <div className="nav-items">
            {['Dashboard', 'Digital tokens', 'Analytics'].map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <div className="dashboard-flex">
          <div className="chart-container">
            <div className="breadcrumb">
              <span className="dashboard-text">DASHBOARD</span>
              <span className="separator">&gt;</span>
              <span>Spexi</span>
            </div>

            <div className="app-header">
              <div className="app-info">
                <img src="/spexi-icon.svg" alt="" className="app-logo" />
                <h2 className="app-title">Spexi</h2>
                <button className="add-button">+</button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart 
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B026FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#B026FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSecondValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6E6E6E" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6E6E6E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false}
                  stroke="rgba(255,255,255,0.05)"
                  horizontalPoints={[14000000, 18000000, 22000000, 26000000]}
                />
                
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.5)"
                  axisLine={false}
                  tickLine={false}
                  fontSize={11}
                  dy={10}
                />
                
                <YAxis 
                  stroke="rgba(255,255,255,0.5)"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${(value/1000000)}M`}
                  fontSize={11}
                  domain={[14000000, 26000000]}
                  ticks={[14000000, 18000000, 22000000, 26000000]}
                />
                
                <Tooltip 
                  content={CustomTooltip}
                />
                
                <Area 
                  type="monotone" 
                  dataKey="secondValue" 
                  stroke="#6E6E6E" 
                  strokeWidth={2}
                  fill="url(#colorSecondValue)"
                  dot={false}
                />
                
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#B026FF" 
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: '#FFFFFF',
                    stroke: '#B026FF',
                    strokeWidth: 2
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="stats-sidebar">
            <div className="total-visits">
              <h3>
                Total visits 
                <span className="info-icon" title="Total number of visits this month">ⓘ</span>
              </h3>
              <div className="visits-value animate-value">
                {new Intl.NumberFormat().format(totalVisits)}
              </div>
              <div className="visits-date">
                {selectedMonth}, 2023
                <button 
                  className="calendar-button"
                  onClick={handleRefreshData}
                  disabled={isUpdating}
                >
                  <span className={`calendar-icon ${isUpdating ? 'rotating' : ''}`}>📅</span>
                </button>
              </div>
            </div>

            <div className="active-users">
              <h3>Active Users</h3>
              <div className={`users-circle ${isUpdating ? 'pulse' : ''}`}>
                <span>{new Intl.NumberFormat().format(activeUsers)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 