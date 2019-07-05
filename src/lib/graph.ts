export class GraphQuery {
  query: string[];
  constructor() {
    this.query = [];
  }

  FOR(vertex: string, edge?: string, path?: string): GraphQueryIn {
    this.query.push('FOR');
    if (vertex && edge && path) {
      this.query.push(`${vertex},${edge},${path}`);
    } else if (vertex && edge) {
      this.query.push(`${vertex},${edge}`);
    } else {
      this.query.push(`${vertex}`);
    }
    return new GraphQueryIn(this.query);
  }
}

class GraphQueryBase {
  query: string[];
  constructor(query: string[]) {
    this.query = query;
  }

  RETURN(...expression: any[]): GraphQueryBase {
    this.query.push('RETURN');
    this.query = this.query.concat(expression);
    return new GraphQueryBase(this.query);
  }

  LIMIT(limit?: Number, skip?: Number): GraphQueryBase {
    if (skip !== undefined && limit !== undefined) {
      this.query.push(`LIMIT ${skip},${limit}`);
    } else if (limit !== undefined && skip === undefined) {
      this.query.push(`LIMIT ${limit}`);
    } else if (limit === undefined && skip !== undefined) {
      throw new Error(`"limit" cannot be undefined when "skip" is defined`)
    } else {
      throw new Error(`missing value for "limit" param`)
    }
    return this;
  }

  SORT(...expression: string[]): GraphQueryBase {
    this.query.push(`SORT ${expression.join(', ')}`);
    return this;
  }

  FILTER(): GraphQueryBase {
    // TODO: Not implemented
    throw new Error('Not implemented');
    return this;
  }

  // SET(key: string, value: any): GraphQueryBase {
  //   console.log(key, value);
  //   return this;
  // }

  toAQL() {
    return this.query.join(' ');
  }
}

class GraphQueryIn {
  query: string[];
  constructor(query: string[]) {
    this.query = query;
  }

  IN(min: Number = 0, max: Number = 0): GraphQueryDirection {
    if (min && max) {
      this.query.push(`IN ${min}...${max}`);
    }
    return new GraphQueryDirection(this.query);
  }
}

class GraphQueryDirection {
  query: string[];
  constructor(query: string[]) {
    this.query = query;
  }

  INBOUND(startVertex: string, ...edgeCollection: string[]): GraphQueryGraph {
    this.query.push(`INBOUND "${startVertex}"`, edgeCollection.join(' '));
    return new GraphQueryGraph(this.query);
  }

  OUTBOUND(startVertex: string, ...edgeCollection): GraphQueryGraph {
    this.query.push(`OUTBOUND "${startVertex}"`, edgeCollection.join(' '));
    return new GraphQueryGraph(this.query);
  }

  ANY(startVertex: string, ...edgeCollection: string[]): GraphQueryGraph {
    this.query.push(`ANY "${startVertex}"`, edgeCollection.join(' '));
    return new GraphQueryGraph(this.query);
  }
}

class GraphQueryGraph extends GraphQueryBase {
  constructor(query: string[]) {
    super(query);
  }

  GRAPH(graphName: string): GraphQueryPrune {
    this.query.push('GRAPH', graphName);
    return new GraphQueryPrune(this.query);
  }
}

class GraphQueryPrune extends GraphQueryBase {
  constructor(query: string[]) {
    super(query);
  }

  PRUNE(condition: string): GraphQueryOptions {
    this.query.push('PRUNE', condition);
    return new GraphQueryOptions(this.query);
  }
}

class GraphQueryOptions extends GraphQueryBase {
  constructor(query: string[]) {
    super(query);
  }

  OPTIONS(options: string): GraphQueryBase {
    this.query.push('OPTIONS', options);
    return new GraphQueryBase(this.query);
  }
}
