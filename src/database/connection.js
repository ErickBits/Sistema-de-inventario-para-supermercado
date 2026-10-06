import sql from 'mssql';

const dbSettings = {
    user: 'sa',
    password: 'Example123!',
    server: 'localhost',
    database: 'webstore',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}