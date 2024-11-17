import { ChannelType } from "discord.js";

const channelsToPing = [
  "1307214679428567091",
  "1307214472837992500",
];

export function setupWelcomePing(client) {
  client.on("guildMemberAdd", async (member) => {
    console.log(" ")
    console.log(`${member.user.tag} has joined the server, attempting to ping...`);

    for (const channelId of channelsToPing) {
      try {
        const channel = await client.channels.fetch(channelId);
        if (!channel || channel.type !== ChannelType.GuildText) {
          console.error(`Channel with ID ${channelId} is not a text channel or does not exist.`);
          continue;
        }

        const message = await channel.send(`<@${member.id}>! 🎉`);

        setTimeout(async () => {
          try {
            await message.delete();
            console.log(`Ping sent and deleted in channel: ${channelId}`);
          } catch (deleteError) {
            console.error(`Failed to delete ping in channel ${channelId}:`, deleteError);
          }
        }, 5000);
      } catch (error) {
        console.error(`Error processing channel ${channelId}:`, error);
      }
    }
  });
}
