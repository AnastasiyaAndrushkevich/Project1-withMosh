import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NewYork", "San Francisco", "Tokyo", "London", "Paris", "Minsk"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
