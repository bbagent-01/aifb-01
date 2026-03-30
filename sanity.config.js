'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/lib/env';

export default defineConfig({
  name: 'brightbase',
  title: 'Brightbase',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
