// src/screens/InformationScreen.test.tsx

import { render, screen, waitFor } from "@testing-library/react";
import { InformationScreen } from "./InformationScreen";
import { server } from "../mocks/handlers";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches and displays users", async () => {
  render(<InformationScreen />);
  expect(await screen.findByText("ユーザ一覧")).toBeInTheDocument();

  await waitFor(async () => {
    expect(await screen.findByText("1.John")).toBeInTheDocument();
    expect(await screen.findByText("2.Doe")).toBeInTheDocument();
  });
});
