import type { z } from 'zod';
import type { FoundationEntity } from '~/schemas';

export type FoundationEntityResponse = z.infer<typeof FoundationEntity>;
