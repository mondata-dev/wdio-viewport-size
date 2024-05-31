const { resolve } = require('path');
const { copyFileSync, existsSync, readFileSync, writeFileSync } = require('fs');


const TYPINGS_FILE = 'index.d.ts';

function moveTypingsToBuild() {
  const typings = resolve(process.cwd(), `./typings/${TYPINGS_FILE}`);
  const buildDir = resolve(process.cwd(), './build');
  const buildTypes = resolve(buildDir, `./${TYPINGS_FILE}`);

  if (existsSync(typings) && existsSync(buildDir)) {
    if (existsSync(buildTypes)) {
      // merge typings
      const typingsContent = readFileSync(typings, 'utf8');
      const buildTypesContent = readFileSync(buildTypes, 'utf8');
      const mergedTypings = typingsContent + '\n\n' + buildTypesContent;
      writeFileSync(buildTypes, mergedTypings, 'utf8');
    } else {
      copyFileSync(typings, buildTypes);
    }
  }
}


if (require.main === module) {
  moveTypingsToBuild();
}
