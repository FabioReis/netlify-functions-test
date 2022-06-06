import s from 'shelljs';
import config from './tsconfig.json';
const outDir = config.compilerOptions.outDir;

s.rm('-rf', outDir);
s.mkdir(outDir);
s.mkdir(`${outDir}/server`);
s.cp('.env', `${outDir}/server/.env`);
s.mkdir('-p', `${outDir}/server/common/swagger`);
s.cp('server/common/api.yml', `${outDir}/server/common/api.yml`);
