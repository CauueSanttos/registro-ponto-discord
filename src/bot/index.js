import Discord from 'discord.js';
import { token_auth } from '../config/authBot';

export async function sendMessage(message) {
  const client = new Discord.Client();

  client.on('ready', () => {
    client
      .channels
      .cache
      .find(channel => channel.id === '705493367508828250')
      .send(message);
  });
  
  await client.login(token_auth);
}
