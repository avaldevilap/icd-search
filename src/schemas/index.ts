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
