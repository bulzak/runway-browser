"use strict";

let prefix = 'Modeling';

class Base extends Error {
  constructor(message) {
    super(message);
    this.name = prefix + 'Error';
  }
}

class Internal extends Error {
  constructor(message) {
    super(message);
    this.name = prefix + 'InternalError';
  }
}

class Unimplemented extends Internal {
  constructor(message) {
    super(message);
    this.name = prefix + 'UnimplementedError';
  }
}

class Parse extends Base {
  constructor(message) {
    super(message);
    this.name = prefix + 'ParseError';
  }
}

class Type extends Base {
  constructor(message) {
    super(message);
    this.name = prefix + 'TypeError';
  }
}

class Lookup extends Type {
  constructor(message) {
    super(message);
    this.name = prefix + 'LookupError';
  }
}

class Runtime extends Base {
  constructor(message) {
    super(message);
    this.name = prefix + 'RuntimeError';
  }
}

class Bounds extends Runtime {
  constructor(message) {
    super(message);
    this.name = prefix + 'BoundsError';
  }
}

module.exports = {
  Base: Base,
  Bounds: Bounds,
  Internal: Internal,
  Lookup: Lookup,
  Parse: Parse,
  Runtime: Runtime,
  Type: Type,
  Unimplemented: Unimplemented,
}