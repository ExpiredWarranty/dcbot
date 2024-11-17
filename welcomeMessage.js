import { ChannelType } from "discord.js";

// Define the channel ID where you want to send welcome messages
const welcomeChannelId = "1307199465974923264"; 

export function setupWelcomeMessage(client) {
  client.on("guildMemberAdd", async (member) => {
    console.log(" ");
    console.log(`${member.user.tag} has joined the server, sending welcome message...`);

    try {
      const channel = await client.channels.fetch(welcomeChannelId);
      if (!channel || channel.type !== ChannelType.GuildText) {
        console.error(`Channel with ID ${welcomeChannelId} is not a text channel or does not exist.`);
        return; // Exit the function if the channel is not found
      }

      await channel.send(`<@${member.id}>! Welcome to the server! 🎉`);
      console.log(`Welcome message sent to channel: ${welcomeChannelId}`);
    } catch (error) {
      console.error(`Error sending welcome message:`, error);
    }
  });
}
