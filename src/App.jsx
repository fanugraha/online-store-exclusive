import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AuthForm from "./Component/Page/Auth page/Auth";

function App() {
  return (
    <NextUIProvider>
      <AuthForm />
    </NextUIProvider>
  );
}

export default App;
