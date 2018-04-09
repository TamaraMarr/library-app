import { API_KEY, BASE_URL } from "../shared/constants";
import Book from "../models/Book";

class DataService {
    searchVolumes(searchType, searchQuery) {
        return fetch(`${BASE_URL}/v1/volumes?q=${searchType}:${searchQuery}&maxResults=40&key=${API_KEY}`)
            .then(response => response.json())
            .then(response => response.items.map(book => new Book(book)))
    }
}

export const dataService = new DataService();