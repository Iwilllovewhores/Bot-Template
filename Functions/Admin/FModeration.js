import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder } from "discord.js"

export async function FModeration({ interaction }) {
  const section = new SectionBuilder({
    accessory: {
      type: ComponentType.Thumbnail,
      media: {
        url: interaction.guild.iconURL()
      }
    },
    components: [
      {
        content: `## Panel Moderation\nOlá, ${interaction.user}, Seja bem-vindo(a) ao painel de moderação,\naqui você pode explorar varias funções. Utilize-as com moderação!`,
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
            customId: "button.open.clear",
            style: 3,
            label: "Clear"
          }),

          new ButtonBuilder({
            customId: "button.close.dashboard",
            style: 2,
            label: "Voltar"
          })
        )
    )
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}  