import { CommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("hello")
  .setDescription("Replies with hello!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Hello!");
}