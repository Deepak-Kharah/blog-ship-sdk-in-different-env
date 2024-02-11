export class SimpleStarWarsSdk {
  /**
   * Retrieves all characters from the Star Wars API.
   * @returns {Promise<Array>} A promise that resolves to an array of character objects.
   */
  static async getAllCharacters() {
    return fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => data.results);
  }

  /**
   * Retrieves a Star Wars character by ID.
   *
   * @param {number} id - The ID of the character.
   * @returns {Promise<Object>} A promise that resolves to the character data.
   */
  static async getCharacter(id) {
    return fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
}
