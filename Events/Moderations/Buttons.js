import { FModeration } from "#functions"
import { ActionRowBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ChannelType } from "discord.js";

export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isButton()) {
      const id = interaction.customId

      if (id == "button.open.Moderation") {
        const dev = await FModeration({ interaction });
        interaction.update(dev)
      }

      if (id == "button.open.clear") {
        const Action = new ActionRowBuilder()
          .addComponents(
            new ChannelSelectMenuBuilder({
              customId: "select.channel.clear",
              placeholder: "Selecione um canal",
              channel_types: [ChannelType.GuildText],
              minValues: 1,
              maxValues: 1
            }),
          )

        const Button = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder({
              customId: "button.close.clear",
              label: "Voltar",
              style: 2
            })
          )

        interaction.update({ flags: ["Ephemeral", "IsComponentsV2"], components: [Action, Button] })
      }

      // Buttons close
      if (id == "button.close.clear") {
        const dev = await FModeration({ interaction });
        interaction.update(dev);
      }
    }
  }
}