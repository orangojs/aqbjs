class Returnable {
  query: string[];
  constructor(query: string[] = []) {
    this.query = query;
  }
  
  toString() {
    return this.query.join('');
  }
}