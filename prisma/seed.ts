import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function test(params:void) {
    const userCreate = await prisma.user.create({
        data: {
            id: '5555445444',
            login: 'TestUser554',
            password: '1234225',
            version: 1
        }
    })
}

async function test2(params:void) {
    const userCreate = await prisma.user.create({
        data: {
            id: 'jkljlkjljk',
            login: 'TestUser22',
            password: '123456',
            version: 2
        }
    })
}

try {
    test()
    // test2()
} catch (error) {
    console.log(error);
    process.exit(1);
} finally{
    prisma.$disconnect;
};