import path from "path";
import fs from "fs";

const appRoot = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appRoot, relativePath);

export default {
  appRoot,
  appSrc: resolveApp("src")
};
