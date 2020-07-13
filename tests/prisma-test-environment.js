const { Client } = require('pg');
const NodeEnvironment = require('jest-environment-node');
const { nanoid } = require('nanoid');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const prismaBinary = './node_modules/.bin/prisma';

const { resolve } = require('path');
const env = require('dotenv');

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);

    this.schema = `test_${nanoid()}`;
    this.databaseUrl = `postgres://postgres:postgres@127.0.0.1:5432/postgres?schema=${this.schema}`;
    env.config({ path: resolve(__dirname, '../.env') });

    if (process.env.DATABASE_URL) {
      this.databaseUrl = `${process.env.DATABASE_URL}_test_${this.schema}`;
    }
  }

  async setup() {
    process.env.DATABASE_URL = this.databaseUrl;
    process.env.SQREEN_DISABLE_STARTUP_WARNING = 1;

    this.global.process.env.SQREEN_DISABLE_STARTUP_WARNING = 1;
    this.global.process.env.DATABASE_URL = this.databaseUrl;

    await exec(`${prismaBinary} migrate up --create-db --experimental`);

    return super.setup();
  }

  async teardown() {
    const client = new Client({ connectionString: this.databaseUrl });
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

module.exports = PrismaTestEnvironment;
