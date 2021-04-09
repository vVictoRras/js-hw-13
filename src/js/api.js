const API_KEY = '21082651-9188b9bfb810422ce45a2516d';
const BASE_URL = 'https://pixabay.com/api';

export default class Pixabay {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchHits() {
    const response = await fetch(
      BASE_URL +
        `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    const newResponse = await response.json();
    return newResponse.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}