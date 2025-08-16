# Firebase Studio

This is a Next.js starter project for Firebase Studio. It includes a simple UI for summarizing text using AI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  Clone the repository or start a new project in Firebase Studio.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

This project requires two processes to be running concurrently: the Next.js development server and the Genkit AI development server.

1.  **Start the Genkit AI server:**
    Open a terminal and run the following command. This will start the Genkit server and watch for any changes in your AI flow files.
    ```bash
    npm run genkit:watch
    ```

2.  **Start the Next.js server:**
    Open a second terminal and run the following command. This will start the Next.js frontend application.
    ```bash
    npm run dev
    ```

Your application should now be running at [http://localhost:9002](http://localhost:9002).

## Available Scripts

-   `npm run dev`: Starts the Next.js development server on port 9002.
-   `npm run genkit:dev`: Starts the Genkit AI server.
-   `npm run genkit:watch`: Starts the Genkit AI server in watch mode.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Lints the project files.
-   `npm run typecheck`: Runs TypeScript to check for type errors.
