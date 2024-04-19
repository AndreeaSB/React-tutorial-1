//import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {

  /*const items = [
    "New York",
    "San Francisco",
    "Chicago",
    "Las Fierbinti",
    "Craiova",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }*/

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>*/}
      <Alert>
        hello <span>lume</span>!
      </Alert>

    </div>
  );
}

export default App;
