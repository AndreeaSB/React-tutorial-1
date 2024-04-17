function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Chicago",
    "Las Fierbinti",
    "Craiova",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key= {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
