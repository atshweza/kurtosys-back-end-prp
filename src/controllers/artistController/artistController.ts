import express from "express";
import { Artist } from "../../models/artist";
import ArtistSearchService  from "../../services/artistService";

class ArtistController {
  public path = "/search-artist";
  public router = express.Router();

  private service;

  constructor() {
    this.intializeRoutes();
    this.service = new ArtistSearchService()
  }

  public intializeRoutes() {
    this.router.get(this.path, this.searchArtist);
  }

  searchArtist = async (
    request: express.Request,
    response: express.Response
  ) => {
    const { searchText } = request.query;
    if(searchText){
      const resp = await this.service.searchArtist(searchText.toString());
      response.send(resp);
    };

    response.status(400).send('searchText is Required!');
  }
}

export default ArtistController;
