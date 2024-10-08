import UserDetails from "./UserDetails";
import data from "./db";
function App() {
  return (
    <>
      <UserDetails data={data} />
    </>
  );
}

export default App;
