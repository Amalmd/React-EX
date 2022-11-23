import Box1 from "./components/Box1";
import TitleProvider from "./providers/TitleProvider";

function App() {
  return (
    <div>
      <Box1 myState={"fasdf"} />
      <TitleProvider>
        <Box1 />
      </TitleProvider>
    </div>
  );
}
export default App;
