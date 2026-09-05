module.exports = {
    database: process.env.DB_NAME || 'techstore',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || ''
};
