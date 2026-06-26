import { FConfig } from "#functions";
import { ApplicationCommandType } from "discord.js";

export default {
  name: "botconfig",
  description: "[CONFIG] configure configurações especificas",
  type: ApplicationCommandType.ChatInput,
  async run(client, interaction) {
    if (!interaction.member.permissions.has("Administrator")) {
      return interaction.reply({ flags: ["Ephemeral"], content: "`❌` | Você não tem permissão para executar esse comando." })
    }
    const dev = await FConfig({ interaction });
    interaction.reply(dev)
  }
}