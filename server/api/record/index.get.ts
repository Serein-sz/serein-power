import { findAllBodyRecord } from '~/server/service/recordService'


export default defineEventHandler(async () => await findAllBodyRecord())
