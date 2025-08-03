// Récupère l'ID depuis l'URL
const params = new URLSearchParams(window.location.search);
const playlistId = params.get("playlist");

if (!playlistId) {
  document.getElementById("playlistInfo").textContent = "❌ Aucune playlist reçue.";
} else {
  document.getElementById("playlistInfo").textContent = `ID de la playlist : ${playlistId}`;

  const fakeTracks = [
    { title: "Intro", artist: "Julio", duration: "1:20" },
    { title: "Empire", artist: "Brutus Max", duration: "3:05" },
    { title: "Glory", artist: "SPQR", duration: "2:47" },
  ];

  const tbody = document.querySelector("#tracksTable tbody");

  fakeTracks.forEach((track, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${track.title}</td>
      <td>${track.artist}</td>
      <td>${track.duration}</td>
    `;
    tbody.appendChild(row);
  });
}
