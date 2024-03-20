import { z } from 'zod';

export const LanguageSpecificText = z.object({
  '@language': z.string(),
  '@value': z.string(),
});

export const Term = z.object({
  label: LanguageSpecificText,
  foundationReference: z.string(),
  linearizationReference: z.string(),
});

export const SimplePropertyValue = z.object({
  propertyId: z.string().nullable().readonly(),
  label: z.string().nullable().readonly(),
  score: z.number().readonly(),
  important: z.boolean().readonly(),
  foundationUri: z.string().nullable(),
  propertyValueType: z.number(),
});

export const SimpleEntity = z.object({
  id: z.string().nullable(),
  title: z.string().nullable(),
  stemId: z.string().nullable(),
  isLeaf: z.boolean(),
  postcoordinationAvailability: z.number(),
  hasCodingNote: z.boolean(),
  hasMaternalChapterLink: z.boolean(),
  hasPerinatalChapterLink: z.boolean(),
  matchingPVs: z.array(SimplePropertyValue).nullable().readonly(),
  propertiesTruncated: z.boolean().readonly(),
  isResidualOther: z.boolean().readonly(),
  isResidualUnspecified: z.boolean().readonly(),
  chapter: z.string().nullable().readonly(),
  theCode: z.string().nullable().readonly(),
  score: z.number().readonly(),
  titleIsASearchResult: z.boolean().readonly(),
  titleIsTopScore: z.boolean().readonly(),
  entityType: z.number(),
  important: z.boolean().readonly(),
  descendants: z.array(z.string()).nullable().readonly(),
});

export const GuessWord = z.object({
  label: z.string().nullable(),
  dontChangeResult: z.boolean(),
});

export const FoundationEntity = z
  .object({
    '@id': z.string(),
    '@context': z.string(),
    title: LanguageSpecificText,
    definition: LanguageSpecificText,
    longDefinition: LanguageSpecificText,
    fullySpecifiedName: LanguageSpecificText,
    diagnosticCriteria: LanguageSpecificText,
    child: z.array(z.string()),
    parent: z.array(z.string()),
    ancestor: z.array(z.string()),
    descendant: z.array(z.string()),
    synonym: z.array(Term),
    narrowerTerm: z.array(Term),
    inclusion: z.array(Term),
    exclusion: z.array(Term),
    browserUrl: z.string(),
  })
  .optional();

export const SearchResult = z.object({
  destinationEntities: z.array(SimpleEntity).nullable().readonly(),
  error: z.boolean().readonly(),
  errorMessage: z.string().nullable().readonly(),
  resultChopped: z.boolean().readonly(),
  wordSuggestionsChopped: z.boolean().readonly(),
  guessType: z.number(),
  uniqueSearchId: z.string().uuid(),
  words: z.array(GuessWord).nullable().readonly(),
});
