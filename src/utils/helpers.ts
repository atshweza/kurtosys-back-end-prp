
import axios from "axios";


async function executeApiCall(requestUrl:string) {
  try {

    const { data } = await axios.get(requestUrl);

    return {
      success: true,
      data,
      error: false,
    };
  } catch (error) {
    return {
      success: false,
      data: 'error',
      error: error.message,
    };
  }
}


export { executeApiCall };