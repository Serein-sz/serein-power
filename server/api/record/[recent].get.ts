import { findRecentBodyRecord } from '~/server/service/recordService'

export default defineEventHandler(async () => await findRecentBodyRecord())
