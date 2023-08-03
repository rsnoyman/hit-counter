import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function Home() {
  // TODO

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number XXX.</p>
    </main>
  );
}

export default Home;
