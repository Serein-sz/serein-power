import type { BodyRecord } from '@prisma/client'
import getPrismaClient from '../utils/prismaUtils'
export async function createBodyRecord(bodyRecord: BodyRecord): Promise<BodyRecord> {
  const prismaClient = getPrismaClient()
  return await prismaClient.bodyRecord.create({
    data: bodyRecord,
  })
}

export async function findAllBodyRecord(): Promise<BodyRecord[]> {
  const prismaClient = getPrismaClient()
  return await prismaClient.bodyRecord.findMany()
}

