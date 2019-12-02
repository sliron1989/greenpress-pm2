const { spawn } = require('child_process');
const folder = process.argv[2];
const command = process.argv[3];

spawn(command, { stdio: "inherit", shell: true ,cwd: folder});




