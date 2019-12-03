const {execSync} = require('child_process');
const {readFileSync} = require('fs');


try {
	console.log('installing sub modules');
	execSync('git submodule update --init --recursive');
	execSync('cd blog-front && npm install');
	console.log('done!');
} catch (e) {
	console.log(e);
	console.log('failed to install with git submodule');
	console.log('trying to clone all:');

	readFileSync('.gitmodules', 'utf8')
	.split('[submodule ')
	.filter(Boolean)
	.map(moduleStr => {
		const rows = moduleStr.split('\n');

		const path = rows[1].split(' = ')[1].trim();
		const repo = rows[2].split(' = ')[1].trim();
		return {path, repo};
	})
	.forEach(({path, repo}) => {
		execSync(`git clone ${repo} ${path}`);
	});
	console.log('done with clone.');
}

