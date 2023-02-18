module.exports.config = {
    user: 'Kroak',
    password: '791305',
    server: 'localhost',
    database: 'Test',
    port: 1433,
    // connectionTimeout: 3000,
    // requestTimeout: 3000,
    pool: {
        max: 100,
        min: 0, //don't close all the connections.
    },
    trustServerCertificate: true
}