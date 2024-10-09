import UserDetails from "./UserDetails";
import { data } from "./db";
function App() {
  let userdata = [...data];
  const onToggleFollow = () => {
    // user.is_following = !user.is_following;
  };
  return (
    <>
      <UserDetails userData={data} onToggleFollow={onToggleFollow} />
    </>
  );
}

export default App;
