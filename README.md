# Firebase Studio

This is a Next.js starter project for Firebase Studio. It includes a simple UI for summarizing text using AI.

## Getting Started

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) (version 18 or later) installed on your system.

### Installation

First, install the necessary project dependencies by running the following command in your terminal:

```bash
npm install
```

### Running the Development Server

This project requires two separate processes to run at the same time: the Next.js development server for the frontend and the Genkit AI server for the backend.

**1. Start the Genkit AI Server**

In your first terminal window, run the following command to start the Genkit server. This will watch for any changes you make to your AI-related files.

```bash
npm run genkit:watch
```

**2. Start the Next.js Server**

In a second terminal window, run the following command to start the Next.js frontend application.

```bash
npm run dev
```

Your application should now be running and accessible at [http://localhost:9002](http://localhost:9002).

## Available Scripts

-   `npm run dev`: Starts the Next.js development server on port 9002.
-   `npm run genkit:watch`: Starts the Genkit AI server in watch mode.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
