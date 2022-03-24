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
    (req, res, ctx) => {
      if (req.body.name === "Tuc de Sendrós per llac de Saboredo") {
        return res(
          ctx.status(200),
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
        );
      } else {
        return res(
          ctx.status(401),
          ctx.json({
            message: "go to hell",
          })
        );
      }
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}users/login`,
    (req, res, ctx) => {
      const user = req.body.username;
      if (user === "Beren") {
        return res(
          ctx.status(201),
          ctx.json({
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJlcmVuIiwibmFtZSI6IkJlcmVuZ3VlciIsImlkIjoiNjIyOGQ5ZTJkM2I0ODRkNDg3MTYwOGVlIiwiaWF0IjoxNjQ4MDU4MzM3fQ.0g0_w9ENLetFoUVLC3ZMG2a9t1vtOQJiYifWJbW7uJE",
          })
        );
      } else {
        return res(
          ctx.status(401),
          ctx.json({
            message: "go to hell",
          })
        );
      }
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/6239018bfb5f2c811f7ce309`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "4 summits: Mil Potros, Pinetó, Rocablanca and Lo Tessó",
          refuge: "Pla de la Font",
          difficulty: "normal",
          kids: true,
          seasons: ["spring,summer,autumn"],
          description:
            "Leaving the Pla de la Font Refuge, we face the climb towards the Fogueroix pass, shortly before reaching the pass we turn right and enter a small pine forest, at the exit of the forest we can already see the peak of a thousand Potros, before passing through the hole of the Bread while contemplating the views towards the Vall d'Escrita, we ascend to the first summit Mil Potros and then careening the Pinetó. Now heading north we begin to climb the ridge of Roca Blanca, to the west we see the impressive Vall de Cabanes. Here we find a step of IIº before making the third peak. We descend towards the Son pass, always heading north we ascend to the Teso. To the east, going down the Teso shovel, we find two well-marked forests, we go down between the two forests until we reach Les Estanyeres and we come across the path that is Son, this path will take us to the refuge.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647903115279_4cimspladelafont.jpg?alt=media&token=d4e5562e-c3d6-460a-bb2d-44269eff0bf9",
          gpx: "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647903115281_4-cims-pla-de-la-font.gpx?alt=media&token=e6067cac-31ae-4bcc-9ed7-384b2afe5955",
          user: {
            username: "miki89",
            id: "6238f532784bd2e6462e087e",
          },
          createdAt: "2022-03-21T22:51:55.172Z",
          updatedAt: "2022-03-21T22:51:56.234Z",
          id: "6239018bfb5f2c811f7ce309",
        })
      );
    }
  ),
  rest.patch(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/update/6229bdbccf53a1fa6ac36821`,
    (req, res, ctx) => {
      if (req.body.name === "Tuc de Sendrós per llac de Saboredo") {
        return res(
          ctx.status(200),
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
        );
      } else {
        return res(
          ctx.status(401),
          ctx.json({
            message: "go to hell",
          })
        );
      }
    }
  ),
];
