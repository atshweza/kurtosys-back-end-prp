import express from "express";
import ArtistSearchService  from "../../services/artistService";

class ArtistAlbumController {
  public path = "/get-artists-albums";
  public router = express.Router();

  private service;

  constructor() {
    this.intializeRoutes();
    this.service = new ArtistSearchService()
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getArtistsAlbums);
  }

  getArtistsAlbums = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { artistId } = request.query;
    if(artistId){
      const resp = await this.service.getArtistAlbum(parseInt(artistId.toString()))
      response.send(resp);
    };
  }
}

export default ArtistAlbumController;
