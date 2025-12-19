# Assignment #1 — Building Your First Express API (GET, POST, PUT, DELETE)

**Student: Nurkhan Kuanyshov** 
**Group: SE-2431**

**File Structure**

<pre>
web2/
│── server.js
│── data.json
│── package.json
│── README.md
</pre>

⸻

**1. Project Description**

This project is a simple backend API built with Node.js and Express.
The API simulates a basic messenger backend, where messages can be created, read, updated, and deleted.

Data is stored in a local JSON file (data.json), without using a database.

The project demonstrates:
	•	REST API principles
	•	CRUD operations (GET, POST, PUT, DELETE)
	•	JSON file persistence
	•	API testing using Postman
___ 
**2. Object Description — Message**

- Each message contains the following fields:

| Field	| Type	| Description |
|-------|-------|--------------| 
| id |	number	| Unique identifier(auto-generated) |
| sender |	string | Name of the sender |
| text	| string	| Message content |
| createdAt	| string  |	Message creation time |
___
**Example Message Object:**

<pre>
{
  "id": 1710000000000,
  "sender": "Alice",
  "text": "Hello!",
  "createdAt": "2025-01-01T12:00:00Z"
}
</pre>
___
**3. Technologies Used**

- Node.js
- Express.js
- Postman
- JSON file storage

**4. How to Run the Server**

Start the server using:

`node server.js`

The server will run at: http://localhost:3000

**5. Routes**

**API Routes**
- **GET** `/objects` — get all messages  
- **POST** `/objects` — create message  
- **PUT** `/objects/:id` — update message  
- **DELETE** `/objects/:id` — delete message
___
**Demo Routes**

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/` | Returns text confirming the server is running |
| GET | `/hello` | Returns a JSON greeting |
| GET | `/time` | Returns current server time |
| GET | `/status` | Returns HTTP status 200 OK |
___
**Message CRUD Routes**

- Get all messages

`GET /objects`

- Create a new message

`POST /objects`

- Request body:
<pre>
{
  "sender": "Alice",
  "text": "Hello world"
}
</pre>

- Update a message by ID

`PUT /objects/:id`

- Request body:
<pre>
{
  "text": "Updated message"
}
</pre>

**Returns 404 if the message is not found**

⸻

- Delete a message by ID

`DELETE /objects/:id`

- Response:
<pre>
{
  "success": true
}
</pre>

**6. Testing With Postman**
1. Open Postman
2.	Create a new request
3.	Select HTTP method (GET, POST, PUT, DELETE)
4.	Enter URL: http://localhost:3000/objects
5. For POST and PUT, choose: 
- Body → raw → JSON
6.	Send the request and verify the response
