import { FConfig, FDashboard } from "#functions";
import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder } from "discord.js";

export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isButton()) {
      const id = interaction.customId;

      if (id == "button.open.configs") {
        const dev = await FDashboard({ interaction });
        interaction.update(dev)
      }

      if (id == "button.open.informations") {
        const user = await interaction.client.users.fetch(interaction.user.id, {
          force: true
        })

        const userInfo = new SectionBuilder({
          accessory: {
            type: ComponentType.Thumbnail,
            media: {
              url: interaction.member.displayAvatarURL()
            }
          },

          components: [
            {
              content: `## User information\n- **Display Name:** ${interaction.user}\n- **User name:** ${interaction.user.username}
              \n- **User ID:** ${interaction.user.id}\n- **Created account:** ${interaction.user.createdAt}\n- **Avatar URL:** [URL](${interaction.user.avatarURL() || "The User has not avatar."})
              \n- **Profile color:** #${user.accentColor}`,
              type: ComponentType.TextDisplay
            }
          ]
        })

        const container = new ContainerBuilder()
          .addSectionComponents(userInfo)
          .addSeparatorComponents(new SeparatorBuilder())
          .addActionRowComponents(
            new ActionRowBuilder()
              .addComponents(
                new ButtonBuilder({
                  customId: "button.close.dashboard",
                  style: 2,
                  label: "Voltar"
                })
              )
          )

        interaction.update({ flags: ["Ephemeral", "IsComponentsV2"], components: [container] })
      }

      // Buttons closes
      if (id == "button.close.dashboard") {
        const dev = await FDashboard({ interaction });
        interaction.update(dev);
      }

      if (id == "button.close.configs") {
        const dev = await FConfig({ interaction });
        interaction.update(dev);
      }
    }
  }
}