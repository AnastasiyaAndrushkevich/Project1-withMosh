/**import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NewYork", "San Francisco", "Tokyo", "London", "Paris", "Minsk"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}*/
/**import Alert from "./components/Alert";
const App = () => {
  return (
  
      <div>
        <Alert>
          Hello <span>world</span>
        </Alert>
      </div>
     
  );
};
*/

import Button from "./components/Button";
function App() {
  return <button>My Button</button>;
}

export default App;
