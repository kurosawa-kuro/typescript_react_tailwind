// src/mocks/handlers.ts

import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "John" },
        { id: 2, name: "Doe" },
        // Add more mock data if necessary
      ])
    );
  }),
];

export const server = setupServer(...handlers);
