class LRU {
  constructor(cacheLen) {
    this.cache = new Set();
    this.map = new Map();
    this.cacheLen = cacheLen;
  }

  get(key) {
    if (this.cache.has(key)) {
      const res = this.map.get(key);
      this.cache.delete(key);
      this.cache.add(key);
      this.map.delete(key);
      this.map.set(key, res);
      return res;
    }
    return -1;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.map.delete(key);
    } else if (this.cacheLen <= this.cache.size) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
      this.map.delete(firstKey)
    }
    this.cache.add(key);
    this.map.set(key, value);
  }
}
