A todo is a task that needs to be done, or might need to be done.

# structure of todo

```json
# a single todos structure
todos = [
    {
        "taskid": "string",
        "message": "string",
        "completed": "boolean"
    }
]

# usage
todos = [
    {
        "taskid": "abc",
        "message": "task 1",
        "completed": false
    },
    {
        "taskid": "def",
        "message": "task 2",
        "completed": true
    }
]

// read a single todo by uuid
GET /todos/:uuid

// create a new todo
POST /todos

// update a todo
PUT /todos/:uuid

// delete single todo by uuid
DELETE /todos/:uuid/:taskId

```
