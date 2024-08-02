import { PrismaClient } from '@prisma/client'
let prismaClient: any;
export default function getPrismaClient() {
  if (!prismaClient) {
    prismaClient = new PrismaClient()
  }
  return prismaClient
} 
