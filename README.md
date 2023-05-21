# RestfulAPI

This project is a Restful API implementation using Node.js, Express.js, and MongoDB. The API provides endpoints for managing resources, allowing CRUD operations (Create, Read, Update, Delete).


## Images

![App Screenshot](https://github.com/GeisielMelo/RestfulAPI/blob/main/RestfulAPI.png?raw=true)


## Features

- Create new resources by sending POST requests.
- Retrieve existing resources by sending GET requests.
- Update existing resources by sending PUT or PATCH requests.
- Delete resources by sending DELETE requests.
- Utilize MongoDB for data persistence.
- Implement RESTful design principles for a standardized API structure.


## Tech Stack

- Node.js
- Express.js
- MongoDB


## Setup

Clone the project to the desired location on your computer.
```bash
    https://github.com/GeisielMelo/RestfulAPI.git
```

```bash
# Navigate to the directory.
$ cd Blog

# Install necessary dependencies.
$ npm install

# Start the BackEnd server.
$ node app.js

# The terminal will display the local address where the application is being executed. Simply enter the same address in your preferred browser. The address used in creating this project was:

    http://localhost:3000/
```

## API Endpoints

- GET /resources: Retrieves all resources.
- POST /resources: Creates a new resource.
- GET /resources/:id: Retrieves a specific resource by ID.
- PUT /resources/:id or PATCH /resources/:id: Updates a specific resource by ID.
- DELETE /resources/:id: Deletes a specific resource by ID.
- Please note that :id in the above endpoints should be replaced with the actual ID of the resource.

    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@GeisielMelo](https://github.com/GeisielMelo)

Feel free to customize and enhance the README as per your project's specific requirements.