import {exec} from 'child_process';

const child = exec('npm run start:dev:electron:direct', {
    detached: true,
    stdio: ['ignore', 1, 2],
});
child.unref();
child.stdout.on('data', (data) => {
    // eslint-disable-next-line
    console.log(data.toString());
});
