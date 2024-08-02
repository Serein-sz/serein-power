import type { BodyRecord } from '@prisma/client'
import { createBodyRecord } from '~/server/service/recordService'


export default defineEventHandler(async (event) => await createBodyRecord(await readBody(event)))
