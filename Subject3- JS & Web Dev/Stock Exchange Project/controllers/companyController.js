import { Model } from '../models/model.js';
import { View } from '../views/view.js';


async function getSymbolFromUrl() {
const params = new URLSearchParams(window.location.search);
  const symbol = params.get("symbol");
  if (!symbol) return View.renderError("Missing symbol");

  View.showLoading();

  try {
    const [profile, history] = await Promise.all([
      Model.getCompanyProfile(symbol),
      Model.getStockHistory(symbol)
    ]);

    View.renderCompany(profile);
    View.renderChart(history);
    View.showCompanyInfo();
  } catch (err) {
    console.error(err);
    View.renderError("Failed to load company info.");
  }
}

getSymbolFromUrl();
