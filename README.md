# CV React App

A simple React-based CV application that renders the portfolio content from Markdown.

## Features

- Built with React using CDN for easy deployment
- Renders Markdown content as HTML
- Responsive design with basic styling
- Suitable for static hosting like GitHub Pages

## Deployment to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Upload the contents of this `cv-app` folder to the repository.
3. Go to the repository settings.
4. Scroll down to "Pages" section.
5. Under "Source", select "Deploy from a branch".
6. Choose the main branch and set the folder to `/` (root) - you may need to move `index.html` to the root of the repository for GitHub Pages to serve it directly.
7. Save the settings.
8. GitHub will provide a URL where your CV is hosted (e.g., `https://username.github.io/repository-name/`).

If you want to host it as a project page (not user/organization page), ensure the repository name is `username.github.io` and place `index.html` in the root.

## Local Development

Open `index.html` in a web browser to view the CV locally.

## Technologies Used

- React (via CDN)
- Marked.js for Markdown parsing
- Babel for JSX transformation