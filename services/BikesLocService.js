const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

module.exports = class BikesLocService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the feedback data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getList() {
    const data = await this.getData();
    return data;
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
};
