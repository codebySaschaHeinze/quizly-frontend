# Quizly

![Quizly logo](/assets/icons/logoheader.png)

## Project Description

Quizly is a quiz application with a static frontend interface that connects to a backend API. Users can register, log in, generate quizzes from YouTube URLs, take quizzes, and review their results.

## Project Context

This frontend was provided as course material by Developer Akademie and was not built from scratch by me.

My main contribution in the related project was the backend implementation and the integration of that backend API with this frontend.

## Live Demo

[Live Demo](https://quizly.saschaheinze.de)

## Tech Stack

- HTML
- CSS
- JavaScript
- REST API integration

## Features

- User registration, login, logout, and token refresh flow
- Quiz generation from YouTube URLs through the backend API
- Quiz library with recently created quizzes
- Quiz overview with editable title and description
- Embedded YouTube video preview for generated quizzes
- Multiple-choice quiz interface
- Result calculation with score display
- Answer review with correct and incorrect answers
- Quiz deletion from the full quiz overview
- Responsive layout using CSS media queries

## Local Setup

This is a static frontend project. It does not include a `package.json` file or package scripts.

1. Clone the repository:

   ```bash
   git clone https://github.com/codebySaschaHeinze/quizly-frontend.git
   ```

2. Open the project folder:

   ```bash
   cd quizly-frontend
   ```

3. Serve the project with a local web server, for example with the Live Server extension in VS Code.

4. Open `index.html` through the local server.

The frontend API base URL is configured in `shared/js/config.js`.

## Related Backend Repository

[Backend Repository](https://github.com/codebySaschaHeinze/quizly-backend)

## Project Status

This project is part of my portfolio and is kept public to demonstrate the integration between the provided frontend and my Quizly backend implementation.
