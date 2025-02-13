// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const data = require('./data.json'); // Import your data

const prisma = new PrismaClient();

const difficulties = ['BEGGINER', 'INTERMEDIATE', 'ADVANCED'];
const intensities = ['LOW', 'MEDIUM', 'HIGH'];
const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const shifts = ['morning', 'afternoon', 'evening'];

async function seed() {
  try {

     // Crear ejercicios base
  const exercises = await prisma.$transaction([
    prisma.excersise.create({
      data: {
        name: 'Sentadillas',
        description: 'Ejercicio para piernas y glúteos',
        difficulty: 'BEGGINER',
        equipment: 'dumbbells',
        muscleGroup: 'legs',
        type: 'repetitions',
        reps: 15,
        sets: 3
      }
    }),
    // Agrega más ejercicios aquí...
    prisma.excersise.create({
      data: {
        name: 'Flexiones',
        description: 'Ejercicio para pecho y brazos',
        difficulty: 'INTERMEDIATE',
        equipment: 'dumbbells',
        muscleGroup: 'chest',
        type: 'repetitions',
        reps: 12,
        sets: 3
      }
    })
  ]);

  // Crear planes mensuales
  const monthlyPlans = [];
  for (let i = 1; i <= 6; i++) {
    const plan = await prisma.plan.create({
      data: {
        name: `Plan Mensual ${i}`,
        features: `Incluye ${3 + i} entrenamientos semanales, seguimiento y soporte 24/7`,
        duration: 'MONTHLY',
        price: 30 + (i * 10),
        trainings: {
          create: Array.from({ length: 4 }).map((_, index) => ({
            name: `Entrenamiento ${index + 1}`,
            description: `Rutina ${['Full Body', 'Upper Body', 'Lower Body', 'Cardio'][index % 4]}`,
            excersises: {
              connect: exercises.slice(0, 4).map(e => ({ id: e.id }))
            },
            schedule: {
              create: {
                days: {
                  create: Array.from({ length: 3 }).map((_, dayIndex) => ({
                    day_of_week: daysOfWeek[(dayIndex * 2) % 6],
                    shift: shifts[dayIndex % 2]
                  }))
                }
              }
            }
          }))
        }
      }
    });
    monthlyPlans.push(plan);
  }

  // Crear planes anuales
  const annualPlans = [];
  for (let i = 1; i <= 6; i++) {
    const plan = await prisma.plan.create({
      data: {
        name: `Plan Anual ${i}`,
        features: `Incluye ${4 + i} entrenamientos semanales, nutrición personalizada y evaluaciones mensuales`,
        duration: 'YEARLY',
        price: 300 + (i * 100),
        trainings: {
          create: Array.from({ length: 6 }).map((_, index) => ({
            name: `Entrenamiento Avanzado ${index + 1}`,
            description: `Rutina ${['HIIT', 'Fuerza', 'Resistencia', 'Movilidad', 'Cross Training', 'Flexibilidad'][index]}`,
            excersises: {
              connect: exercises.slice(2, 6).map(e => ({ id: e.id }))
            },
            schedule: {
              create: {
                days: {
                  create: Array.from({ length: 4 }).map((_, dayIndex) => ({
                    day_of_week: daysOfWeek[(dayIndex * 2 + 1) % 6],
                    shift: shifts[dayIndex % 2]
                  }))
                }
              }
            }
          }))
        }
      }
    });
    annualPlans.push(plan);
  }

  console.log({ monthlyPlans, annualPlans });


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
