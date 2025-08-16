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

Your application should now be running and accessible at `http://localhost:9002`.

## Exporting the Project

To download your project code to your local computer, you can use Git and a provider like GitHub.

1.  **Initialize Git:** In the terminal, run `git init` to create a new Git repository.
2.  **Create a GitHub Repository:** Go to [GitHub](https://github.com/new) and create a new, empty repository. Do not add a README or license file from the GitHub UI.
3.  **Link to GitHub:** Follow the instructions on GitHub under "...or push an existing repository from the command line" to link your project and push your code. The commands will look something like this:
    ```bash
    git remote add origin <your-github-repo-url>
    git branch -M main
    git add .
    git commit -m "Initial commit"
    git push -u origin main
    ```
4.  **Clone to Local Machine:** On your local PC, run `git clone <your-github-repo-url>` to download the project.

## Available Scripts

-   `npm run dev`: Starts the Next.js development server on port 9002.
-   `npm run genkit:watch`: Starts the Genkit AI server in watch mode.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
