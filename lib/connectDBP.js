import prisma from '@/prisma'

export const connectDBP = async () => {
    try {
        console.log("Connected through prisma")
        await prisma.$connect()
    } catch (error) {
        return new Error(error.message)
    }
}