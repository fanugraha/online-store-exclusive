import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Homepage from "./Component/Page/Homepage/Homepage";

function App() {
  return (
    <NextUIProvider>
      <Homepage />
    </NextUIProvider>
  );
}

export default App;
