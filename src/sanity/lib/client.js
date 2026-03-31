import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const draftClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
});
