import fs from "fs";
import path from "path";

export async function readFile(localPath) {
  const contents = fs.readFileSync(path.join(process.cwd(), localPath), "utf8");

  return new Promise(function (resolve) {
    setTimeout(resolve(contents), 100);
  });
}

export function writeFile(localPath, content) {
  fs.writeFileSync(path.join(process.cwd(), localPath), content, {
    encoding: "utf8",
  });

  return new Promise(function (resolve) {
    setTimeout(resolve("Write success"), 100);
  });
}
