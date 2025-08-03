export const Model = (() => {
  const USE_MOCK = true;
  const API_KEY = "secrest_api_key"; 

  const mockData = [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "AAON", name: "AAON, Inc." },
    { symbol: "AABA", name: "null" },
    { symbol: "AAXN", name: "Axon Enterprise, Inc." },
    { symbol: "AAWW", name: "Atlas Air Worldwide Holdings, Inc." },
    { symbol: "CPAAW", name: "Conyers Park II Acquisition Corp." },
    { symbol: "FAAR", name: "First Trust Alternative Absolute Return Strategy ETF" },
    { symbol: "AAL", name: "American Airlines Group Inc." },
    { symbol: "AAOI", name: "Applied Optoelectronics, Inc." },
    { symbol: "STAA", name: "STAAR Surgical Company" }
  ];
   const mockProfiles = {
    AAPL: {
      companyName: "Apple Inc.",
      symbol: "AAPL",
      price: 191.34,
      changesPercentage: "+1.17%",
      description: "Apple Inc. designs, manufactures, and markets smartphones, computers, and other consumer electronics.",
      sector: "Technology",
      image: "https://financialmodelingprep.com/image-stock/AAPL.png"
    },
    AAON: {
      companyName: "AAON, Inc.",
      symbol: "AAON",
      price: 65.12,
      changesPercentage: "-0.87%",
      description: "AAON designs and produces HVAC systems.",
      sector: "Industrials",
      image: "https://financialmodelingprep.com/image-stock/AAON.png"
    }
  };

  const mockHistory = {
    AAPL: [
      { date: "2024-08-01", close: 190.10 },
      { date: "2024-08-02", close: 191.34 },
      { date: "2024-08-03", close: 192.15 }
    ],
    AAON: [
      { date: "2024-08-01", close: 66.00 },
      { date: "2024-08-02", close: 65.30 },
      { date: "2024-08-03", close: 65.12 }
    ]
  };


  async function getCompanies(query) {
    if (USE_MOCK) {
      return mockData.filter(company =>
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.symbol.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);
    } else {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
      );
      return await res.json();
    }
  }
  
  //step 2
  async function getCompanyProfile(symbol) {
    if (USE_MOCK) {
      return mockProfiles[symbol] || null;
    } else {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=${API_KEY}`
      );
      const data = await res.json();
      return data.profile;
    }
  }

  async function getStockHistory(symbol) {
    if (USE_MOCK) {
      return mockHistory[symbol] || [];
    } else {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=${API_KEY}`
      );
      const data = await res.json();
      return data.historical;
    }
  }

  return {
    getCompanies,
    getCompanyProfile,
    getStockHistory
  };
})();
