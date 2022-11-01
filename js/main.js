function copyDiscord() {
  navigator.clipboard.writeText("INVISIBILITIES#6478").then(() => {});

  const discordText = document.getElementsByClassName("discordText")[0]
  const oldText = discordText.textContent

  discordText.textContent = "copied!"

  setTimeout(() => {
    discordText.textContent = oldText
  }, 1000);
}
