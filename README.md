# Quotable

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-quotable) to get started.

### Learning Objectives

- Incorporate third-party services into Express APIs
- Use `cross-fetch` to make a `fetch` call
- Use the pg library with $1, $2, $3 syntax to sanitize our SQL queries to prevent SQL injection
- Write a INSERT query that creates and returns a row in a SQL table

### Description

Your task is to create a Futurama profile directory API. Each profile contains a `name` (a person's name) and a `quote`. The `name` should come from the request body. The `quote` should be randomly generated using the Futurama API. You can `fetch` a single quote from the Futurama API by making a `GET` request to `https://futuramaapi.herokuapp.com/api/quotes/1`.

Organize your fetch request & model method calls in the `ProfileService.js`.

### Acceptance Criteria

- The `Profile.insert` method can insert a row into the profiles table and return that row as a `new Profile` object
- The `ProfileService.create` method:
  - Fetches a quote from the Futurama API
  - Creates a new profile using the `Profile` model with the `name` and fetched quote
  - Returns the newly created profile
- The `profiles` controller invokes the `ProfileService` to `create` a profile and send it back to the client
- A user can send a `POST` request to `/api/v1/profiles` and get their newly created profile object with the name they sent in the request body and a random quote
- The pre-existing test should pass

### Rubric

| Task                                      | Points |
| ----------------------------------------- | ------ |
| `Profile.insert` implemented              | 4      |
| `ProfileService.create` implemented       | 4      |
| `POST /api/v1/profiles` route implemented | 2      |
