import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder } from "discord.js"

export async function FDashboard({ interaction }) {
  const section = new SectionBuilder({
    accessory: {
      type: ComponentType.Thumbnail,
      media: {
        url: interaction.member.displayAvatarURL()
      }
    },
    components: [
      {
        content: `## Dashboard information\nOlá, ${interaction.user}, Seja bem-vindo(a) ao **Informações do painel**\n### \`🪧\` Leia com atenção!\nUtilize esses sistemas com consiencia.\n\nMade by **ntx**`,
        type: ComponentType.TextDisplay
      }
    ]
  })

  const container = new ContainerBuilder()
    .addSectionComponents(section)
    .addSeparatorComponents(new SeparatorBuilder())
    .addActionRowComponents(
      new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder({
            style: 3,
            label: "Informações",
            customId: "button.open.informations"
          }),

          new ButtonBuilder({
            style: 4,
            label: "Moderação",
            customId: "button.open.Moderation"
          }),

          new ButtonBuilder({
            style: 2,
            label: "Voltar",
            customId: "button.close.configs"
          })
        )
    )
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}