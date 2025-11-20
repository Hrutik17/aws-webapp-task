export const handler = async (event) => {

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        { id: 1, task: "Learn AWS" },
        { id: 2, task: "Build App" }
      ])
    };
  }

  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body || "{}");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Task added successfully",
        task: body.task || null
      })
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Unsupported method" })
  };
};
