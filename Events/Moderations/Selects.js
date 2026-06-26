export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isChannelSelectMenu() && interaction.customId === "select.channel.clear") {
      await interaction.reply({ content: "Nukando canal...", flags: ["Ephemeral"] });

      const channel = interaction.guild.channels.cache.get(
        interaction.values[0]
      );

      if (!channel) return;

      const position = channel.position;
      const newChannel = await channel.clone();
      await channel.delete();
      await newChannel.setPosition(position);

      await newChannel.send({
        content: `\`🔨\` Nucked by \`${interaction.user.username}\``
      });

      await interaction.editReply({ flags: ["Ephemeral"], content: "Channel Nucked" })
    }
  }
}