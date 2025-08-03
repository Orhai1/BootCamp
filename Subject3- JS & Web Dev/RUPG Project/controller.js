import { model } from './model.js';
import { view } from './view.js';

document.getElementById('generate-button').addEventListener('click', async () => {
  const users = await model.getRandomUsers();
  const quote = await model.getKanyeQuote();
  const pokemon = await model.getRandomPokemon();
  const text = await model.getText();

  const mainUser = {
    name: `${users[0].name.first} ${users[0].name.last}`,
    picture: users[0].picture.large,
  };

  const friends = model.getFriends(users);

  view.renderUser(mainUser, quote, pokemon, text);
  view.renderFriends(friends);
});
