import * as fs from 'fs';
import * as path from 'path';
import { Data } from '@data/i-data';

interface EnvConfig {
  [key: string]: Data;
}

// @ts-ignore
const loadEnvConfig = (env: string): Data => {
  const filePath = path.join(__dirname, '..', 'data', `${env}.json`);

  try {
    const rawConfig = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawConfig);
  } catch (error: any) {
    console.error(`Error loading environment config for '${env}': ${error.message}`);
  }
};

const config: EnvConfig = {
  stg: loadEnvConfig('stg'),
  pre: loadEnvConfig('pre'),
  prd: loadEnvConfig('prd'),
};

export default config;
