import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    // Seed Passengers
    const passenger1 = await prisma.passenger.create({
        data: {
            name: 'Jorge Doe',
            email: 'john@example.com',
            address: '123 Main St',
        },
    });

    const passenger2 = await prisma.passenger.create({
        data: {
            name: 'Jane Doe',
            email: 'jane@example.com',
            address: '456 Elm St',
        },
    });

    // Seed Flights
    const flight1 = await prisma.flight.create({
        data: {
            flightNumber: 'ABC123',
            departure: 'New York',
            destination: 'Los Angeles',
            departureTime: new Date(),
            arrivalTime: new Date(),
        },
    });

    const flight2 = await prisma.flight.create({
        data: {
            flightNumber: 'DEF456',
            departure: 'London',
            destination: 'Paris',
            departureTime: new Date(),
            arrivalTime: new Date(),
        },
    });

    // Seed Reservations
    await prisma.reservation.createMany({
        data: [
            {
                passengerId: passenger1.id,
                flightId: flight1.id,
            },
            {
                passengerId: passenger2.id,
                flightId: flight2.id,
            },
        ],
    });

    console.log('Seed data inserted successfully');
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
