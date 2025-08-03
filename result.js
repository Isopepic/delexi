function getPlaylistIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("playlist");
}

function formatDuration(ms) {
  const min = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function simulateFetchPlaylist(id) {
  return {
    name: "Fake Playlist",
    tracks: [
      { title: "No Role Modelz", artist: "J. Cole", duration: 260000 },
      { title: "Money Trees", artist: "Kendrick Lamar", duration: 240000 },
      { title: "N95", artist: "Kendrick Lamar", duration: 200000 },
    ]
  };
}

function displayPlaylist() {
  const id = getPlaylistIdFromURL();
  if (!id) return;

  const data = simulateFetchPlaylist(id);
  document.getElementById("playlistInfo").innerHTML = `📝 Nom de la playlist : <strong>${data.name}</strong>`;

  const tbody = document.querySelector("#tracksTable tbody");
  data.tracks.forEach((track, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${track.title}</td>
      <td>${track.artist}</td>
      <td>${formatDuration(track.duration)}</td>
    `;
    tbody.appendChild(row);
  });
}

displayPlaylist();
