import axios from 'axios';

class CommunicationService {
    getGif(searchString, dataHandler, errorHandler) {
		axios.get('https://api.giphy.com/v1/gifs/search', {
			params: {
				api_key: "lXfqqsnpNmFr6EnSSOY8x8AAhmmRu393",
				q: searchString,
				limit: 400
			}
		})
		.then((response) => {
			dataHandler(response.data.data);
		})
		.catch((error) => {
			errorHandler(error);
		})
	}
}

export const communication = new CommunicationService();