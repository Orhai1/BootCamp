export const view = {
  renderUser(mainUser, quote, pokemon, text) {
    const userDiv = document.getElementById('user-profile');
    userDiv.innerHTML = `
      <div class="profile-card">
        <img src="${mainUser.picture}" alt="User photo" />
        <h2>${mainUser.name}</h2>
        <p><strong>Favorite quote:</strong> "${quote}"</p>
        <div>
          <img src="${pokemon.image}" alt="${pokemon.name}" />
          <span>Favorite Pokemon: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
        </div>
        <div class="about">
          <h4>About me</h4>
          <p>${text}</p>
        </div>
      </div>
    `;
  },

  renderFriends(friends) {
    const friendsDiv = document.getElementById('friends-list');
    friendsDiv.innerHTML = `<h3>Friends</h3><ul>
      ${friends.map(f => `<li>${f.name}</li>`).join('')}
    </ul>`;
  }
};
