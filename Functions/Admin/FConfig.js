import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder } from "discord.js"

export async function FConfig({ interaction }) {
  const section = new SectionBuilder({
    accessory: {
      type: ComponentType.Thumbnail,
      media: {
        url: interaction.guild.iconURL()
      }
    },
    components: [
      {
        content: `## Configs Panel\n> Informações\n> Moderação\nUtilize esses sistemas com moderação.`,
        type: ComponentType.TextDisplay
      },
    ]
  })

  const container = new ContainerBuilder()
    .addSectionComponents(section)
    .addSeparatorComponents(new SeparatorBuilder())
    .addActionRowComponents(
      new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder({
            customId: "button.open.configs",
            label: "Configs",
            style: 2
          })
        )
    )
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}