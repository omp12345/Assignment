# Assignment
swagger: "2.0"
info:
  description: "API documentation for the Full Stack CRUD Assignment"
  version: "1.0.0"
  title: "Full Stack CRUD API"
basePath: "/api"
schemes:
  - "http"
paths:
  /items:
    get:
      summary: "Get all items"
      description: "Returns a list of all items."
      responses:
        200:
          description: "Successful operation"
          schema:
            type: "array"
            items:
              $ref: "#/definitions/Item"
    post:
      summary: "Create a new item"
      description: "Creates a new item."
      parameters:
        - name: "item"
          in: "body"
          description: "Item object that needs to be added"
          required: true
          schema:
            $ref: "#/definitions/Item"
      responses:
        200:
          description: "Successful operation"
          schema:
            $ref: "#/definitions/Item"

  /items/{id}:
    get:
      summary: "Get item by ID"
      description: "Returns a single item based on the ID."
      parameters:
        - name: "id"
          in: "path"
          description: "ID of the item to retrieve"
          required: true
          type: "integer"
      responses:
        200:
          description: "Successful operation"
          schema:
            $ref: "#/definitions/Item"
        404:
          description: "Item not found"
    put:
      summary: "Update item by ID"
      description: "Updates an existing item based on the ID."
      parameters:
        - name: "id"
          in: "path"
          description: "ID of the item to update"
          required: true
          type: "integer"
        - name: "item"
          in: "body"
          description: "Updated item object"
          required: true
          schema:
            $ref: "#/definitions/Item"
      responses:
        200:
          description: "Successful operation"
          schema:
            $ref: "#/definitions/Item"
        404:
          description: "Item not found"
    delete:
      summary: "Delete item by ID"
      description: "Deletes an item based on the ID."
      parameters:
        - name: "id"
          in: "path"
          description: "ID of the item to delete"
          required: true
          type: "integer"
      responses:
        204:
          description: "Successful operation"

definitions:
  Item:
    type: "object"
    properties:
      id:
        type: "integer"
        format: "int64"
      name:
        type: "string"
      description:
        type: "string"
