import { defineConfig } from 'orval'

export default defineConfig({
  dashboardApi: {
    input: {
      target: 'http://localhost:8080/swagger.json',
    },
    output: {
      mode: 'tags',
      target: './src/rest/generated/hooks.ts',
      schemas: './src/rest/generated/types',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/plugins/customInstance.ts',
          name: 'customInstance',
        },
        useDates: false,
        query: {
          useQuery: true,
          useInfinite: true,
          // useInfiniteQueryParam: 'page',
        },
      },
    },
  },
})

