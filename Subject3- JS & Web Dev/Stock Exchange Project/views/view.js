export const View = (() => {
  const resultsList = document.getElementById("results");
  const loading = document.getElementById("loading");

function showLoading() {
  if (loading) loading.style.display = "block";
  if (resultsList) resultsList.innerHTML = "";
}

function hideLoading() {
  if (loading) loading.style.display = "none";
}

function renderCompanies(companies) {
  if (!resultsList) return;

  resultsList.innerHTML = "";

  if (companies.length === 0) {
    resultsList.innerHTML = "<li>No results found.</li>";
    return;
  }

  companies.forEach(company => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `../html/company.html?symbol=${company.symbol}`;
    a.textContent = `${company.name} (${company.symbol})`;
    a.target = "_blank";
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}

function renderError(msg = "Error loading data") {
  if (resultsList) resultsList.innerHTML = `<li>${msg}</li>`;
  if (loading) {
    loading.textContent = msg;
    loading.style.color = "red";
  }
}


  //step 2
   const logo = document.getElementById("company-logo");
  const name = document.getElementById("company-name");
  const price = document.getElementById("stock-price");
  const desc = document.getElementById("company-description");
  const chart = document.getElementById("stock-chart");
  const info = document.getElementById("company-info");
  
  function renderCompany(profile) {
    if (!profile) return;

    if (logo) logo.src = profile.image;
    if (name) name.textContent = `${profile.companyName} (${profile.sector})`;

    const change = parseFloat(profile.changesPercentage);
    const color = change >= 0 ? "green" : "red";

    if (price) {
      price.innerHTML = `Stock price: $${profile.price} <span style="color:${color}">(${profile.changesPercentage})</span>`;
    }

    if (desc) desc.textContent = profile.description;
  }

  function renderChart(history) {
    if (!chart) return;

    const labels = history.map(point => point.date).reverse();
    const prices = history.map(point => point.close).reverse();

    new Chart(chart, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Stock Price History",
          data: prices,
          borderColor: "#ff3f90",
          backgroundColor: "rgba(255,63,144,0.2)",
          fill: true,
          tension: 0.3
        }]
      }
    });
  }

  function showCompanyInfo() {
    if (info) info.style.display = "block";
    if (loading) loading.style.display = "none";
  }
  
  return {
    showLoading,
    hideLoading,
    renderCompanies,
    renderError,
    renderCompany,
    renderChart,
    showCompanyInfo
  };
})();
