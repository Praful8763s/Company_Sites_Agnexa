import { z } from 'zod';

import {
	createTRPCRouter,
	// protectedProcedure,
	publicProcedure,
} from '~/server/api/trpc';

export const agnexaRouter = createTRPCRouter({
	// prefix: t.procedure.input(callable).query(async (args) => handler(args)),
});
