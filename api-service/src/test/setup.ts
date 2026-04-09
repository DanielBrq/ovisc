// =========== Test Setup ============
// Limpia todas las tablas de la base de datos de pruebas
// entre cada test para evitar datos residuales.
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL no esta definido para tests');

const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Limpiar tablas despues de cada test (orden para respetar foreign keys)
afterEach(async () => {
  await prisma.$transaction([
    prisma.verification.deleteMany(),
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),
    prisma.user.deleteMany(),
  ]);
});

// Cerrar la conexion al finalizar todos los tests
afterAll(async () => {
  await prisma.$disconnect();
  await pool.end();
});
