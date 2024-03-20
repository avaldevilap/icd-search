import type { z } from 'zod';
import type { FoundationEntity, SearchResult } from '~/schemas';

export type FoundationEntityResponse = z.infer<typeof FoundationEntity>;
export type SearchResultResponse = z.infer<typeof SearchResult>;
