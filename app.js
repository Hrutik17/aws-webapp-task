let tasks = [];

export const handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
    };

    try {
        // CORS Preflight
        if (event.httpMethod === "OPTIONS") {
            return { statusCode: 200, headers };
        }

        // GET → return tasks
        if (event.httpMethod === "GET") {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(tasks)
            };
        }

        // POST → add task
        if (event.httpMethod === "POST") {
            const body = JSON.parse(event.body);
            const newTask = { task: body.task };
            tasks.push(newTask);

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ message: "Task added", task: newTask })
            };
        }

        // invalid methods
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: "Unsupported HTTP method" })
        };

    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: err.message })
        };
    }
};
