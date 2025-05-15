export default async function Dashboard() {
  const data = await fetchData(); // Fetch data on the server

  return (
    <div>
      <h1>Dashboard Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Database Error:", error);
    return null; // Or handle the error appropriately
  }
}