export const View = (() => {
  const resultsList = document.getElementById("results");
  const loading = document.getElementById("loading");

  function showLoading() {
    loading.style.display = "block";
    resultsList.innerHTML = "";
  }

  function hideLoading() {
    loading.style.display = "none";
  }

  function renderCompanies(companies) {
    resultsList.innerHTML = "";

    if (companies.length === 0) {
      resultsList.innerHTML = "<li>No results found.</li>";
      return;
    }

    companies.forEach(company => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `company.html?symbol=${company.symbol}`;
      a.textContent = `${company.name} (${company.symbol})`;
      li.appendChild(a);
      resultsList.appendChild(li);
    });
  }

  function renderError() {
    resultsList.innerHTML = "<li>Error loading data.</li>";
  }

  return {
    showLoading,
    hideLoading,
    renderCompanies,
    renderError
  };
})();
