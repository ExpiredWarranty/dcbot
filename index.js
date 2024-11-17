import { Client, GatewayIntentBits } from "discord.js";
import { setupWelcomeMessage } from "./welcomeMessage.js";
// import axios from "axios";
// enabled if debugging
import { setStreamingStatus } from "./status.js"; 
import { setupWelcomePing } from "./setupWelcomePing.js";

const token = process.env['token'];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});


client.once("ready", () => {
  console.log(`successfuly logged into ${client.user.tag}`);
  setStreamingStatus(client); 
});

setupWelcomeMessage(client);

setupWelcomePing(client);

client.login(token);

/* axios
  .get(`https://discord.com/api/v10/users/@me`, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  })
  .then((response) => {
    console.log(response.data); 
  })
  .catch((err) => {
    console.error("Error fetching bot info:", err);
  }); */
//debug script/info
console.log("-------------");
console.log("|Bot outputs|")
console.log("-------------");
console.log("|           |")
console.log("▼           ▼")
console.log("");
