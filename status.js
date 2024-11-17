import { ActivityType } from "discord.js";

export const setStreamingStatus = (client) => {
  console.log("status was set correctly");

  client.user.setPresence({
    activities: [{
      name: "My Femboy Roommate!",
      type: ActivityType.Streaming,
      url: "https://twitch.tv/Rainbow6",
    }],
    status: "online",
  })
};
