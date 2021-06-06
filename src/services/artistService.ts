import { executeApiCall } from "../utils/helpers";
import { API_URL } from "../utils/constants";
class ArtistService {
  constructor() {}

  searchArtist = async(searchText:string)=>{
    return await executeApiCall(API_URL + `/search/artist?q=${searchText}`);
  }

  getArtistAlbum = async (artistId:number) => {
    return await executeApiCall(API_URL + `/artist/${artistId}`);
  }

  fetchArtistTopTracksClient = async (artistId:number) => {
  return await executeApiCall(API_URL + `/artist/${artistId}/top`);
  }
}

export default ArtistService;