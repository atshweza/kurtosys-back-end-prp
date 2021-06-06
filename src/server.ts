import dotenv from "dotenv";

import App from "./app";
import ArtistController from "./controllers/artistController/artistController";
import ArtistAlbumController from "./controllers/artistController/artistAlbumController"

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT , 10);

const app = new App([new ArtistController(),new ArtistAlbumController()], PORT);

app.listen();
