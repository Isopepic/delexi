function extractPlaylistId(url) {
  const match = url.match(/playlist\/([a-zA-Z0-9]+)(\?|$)/);
  return match ? match[1] : null;
}


document.getElementById("startButton").addEventListener("click", () => {
  const link = document.getElementById("playlistInput").value;
  const reaction = document.getElementById("reaction");
  const id = extractPlaylistId(link);

  if (!id) {
    reaction.textContent = "⛔ Lien invalide.";
  } else {
    reaction.textContent = `🎧 Playlist ID: ${id}`;
  }
});

// 📜 Lorsqu'on clique sur "Mes Delexis"
document.getElementById("historyButton").addEventListener("click", () => {
  alert("🔖 (fonction Mes Delexis à venir)");
});
