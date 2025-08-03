export const Model = (() => {
  const USE_MOCK = true;
  const API_KEY = "YOUR_KEY_HERE";

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

  return {
    getCompanies
  };
})();
