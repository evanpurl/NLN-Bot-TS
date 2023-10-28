import { BaseInteraction, Client, Interaction } from "discord.js";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isAnySelectMenu()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: BaseInteraction): Promise<void> => {
    // handle slash command here
};