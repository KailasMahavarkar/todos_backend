A todo is a task that needs to be done, or might need to be done.

>live
- https://synctodo.netlify.app

>structure of 'todos'
```json
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
```
>Features:
1. user can save the todo
2. mark task completed
3. undo completed task
4. delete task
5. recover doto anywhere using unique identifier

>API
- create 	  -> POST   -> /tasks
- read todo   -> GET    -> /tasks/:uuid/:taskid
- update todo -> PATCH  -> /tasks/:uuid
- delete todo -> DELETE -> /tasks/:uuid/:taskid (this deletes task within todo not todo itself)

>Code
- backend: https://github.com/KailasMahavarkar/todos_frontend
- frontend: https://github.com/KailasMahavarkar/todos_frontend
```
