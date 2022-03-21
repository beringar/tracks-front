import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          tracks: [
            {
              name: "Tuc de Sendrós per llac de Saboredo",
              refuge: "Saboredo",
              difficulty: "normal",
              kids: true,
              seasons: ["spring", "summer"],
              description:
                "Description of track, this route is very appealing because...",
              image: "https://mapio.net/images-p/7224428.jpg",
              gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
              user: {
                username: "miki",
                id: "6229bdbccf53a1fa6ac36821",
              },
              id: "6229bdbccf53a1fa6ac36821",
            },
            {
              name: "Punta Alta de Comalesbienes des de Cavallers",
              refuge: "Ventosa i Calvell",
              difficulty: "high",
              kids: false,
              seasons: ["spring", "summer"],
              description:
                "Description of track, this route is very appealing because...",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/e/ea/P1280563x_-_Pic_de_Comalesbienes.JPG",
              gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
              user: {
                username: "miki",
                id: "6229bdbccf53a1fa6ac36821",
              },
              id: "6229c2a2cf53a1fa6ac36823",
            },
          ],
        })
      );
    }
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/6229bdbccf53a1fa6ac36821`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({}))
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/new`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
          name: "Tuc de Sendrós per llac de Saboredo",
          refuge: "Saboredo",
          difficulty: "normal",
          kids: true,
          seasons: ["spring", "summer"],
          description:
            "Description of track, this route is very appealing because...",
          image: "https://mapio.net/images-p/7224428.jpg",
          gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
        })
      )
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/6235b6b63adf2764185de853`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "testing timeago functionality right now",
          refuge: "Colomina",
          difficulty: "low",
          kids: true,
          seasons: ["autumn"],
          description:
            "Roads have long been built through passes, as well as railways more recently. Some high and rugged passes may have tunnels bored underneath a nearby mountainside (like the Eisenhower Tunnel bypassing Loveland Pass in the Rockies) to allow faster traffic flow throughout the year.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647687349187_myweeklymenu.png?alt=media&token=635fdd00-7e29-49ee-afce-591624148607",
          gpx: "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647687349250_RUTA%20B%20%20Entorno%20Estany%20de%20Sant%20Maurici%20-%20Espot.gpx?alt=media&token=8ac07945-5642-4304-8f8a-9f0b0b033bcd",
          user: {
            username: "Beren",
            id: "6228d9e2d3b484d4871608ee",
          },
          createdAt: "2022-03-19T10:55:50.210Z",
          updatedAt: "2022-03-19T10:55:50.210Z",
          id: "6235b6b63adf2764185de853",
        })
      );
    }
  ),
];
