import { useState } from "react";
import Header from "./components/Header";
import FormTest from "./FormTest";
import Login from "./Scenes/Login";

function App() {
  const [user, setUser] = useState(); //(passing > shows truthy { name: "Todd" } makes page show logout(shows logged in)
  return (
    <>
      <Header user={user} setUser={setUser} />
      <FormTest />
      <br />
      {!user && <Login setUser={setUser} />}
    </>
  );
}

export default App;
