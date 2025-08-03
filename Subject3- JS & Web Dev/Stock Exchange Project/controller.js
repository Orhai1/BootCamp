import { Model } from './model.js';
import { View } from './view.js';

document.getElementById("search-button").addEventListener("click", async () => {
  const query = document.getElementById("search-input").value.trim();
  if (!query) return;

  View.showLoading();

  try {
    const companies = await Model.getCompanies(query);
    View.hideLoading();
    View.renderCompanies(companies);
  } catch (error) {
    View.hideLoading();
    View.renderError();
    console.error(error);
  }
});
