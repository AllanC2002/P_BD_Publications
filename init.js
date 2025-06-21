db.createCollection("Publications");

db.Publications.insertOne({
  Id_User: 12,
  Text: "Primera publicación de ejemplo.",
  Multimedia: [
    {
      name: "Photo1",
      url: "https://miservidor.com/foto1.png",
      type: "image/png"
    },
    {
      name: "Video1",
      url: "https://miservidor.com/video1.mp4",
      type: "video/mp4"
    }
  ],
  Status: 1,
  Datepublish: new Date(),
  Likes: [12, 15, 20]
});
