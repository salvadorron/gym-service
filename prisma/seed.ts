// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const data = require('./data.json'); // Import your data

const prisma = new PrismaClient();

async function seed() {
  try {
    for (const stateData of data) {
      const state = await prisma.state.create({
        data: {
          name: stateData.estado,
        },
      });

      for (const municipalityData of stateData.municipios) {
        const municipality = await prisma.municipality.create({
          data: {
            name: municipalityData.municipio,
            state: {
              connect: { id: state.id }, // Connect to the state
            },
          },
        });

        for (const parishData of municipalityData.parroquias) {
          await prisma.parrish.create({
            data: {
              name: parishData,
              municipality: {
                connect: { id: municipality.id }, // Connect to the municipality
              },
            },
          });
        }
      }
    }

    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
