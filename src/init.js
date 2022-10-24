const Hapi = require('@hapi/hapi');


async function init() {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
