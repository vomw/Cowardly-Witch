I have made further adjustments to address the blank page issue and the `404 Not Found` error for `app.min.js`.

Here's what I've changed:
1.  **Removed `output.publicPath` from `webpack.config.js`**: While adding absolute paths to `index.html` was a good step, having `publicPath` set in Webpack might have been causing unintended double-prefixing or conflicts. By removing it, Webpack will revert to its default behavior, which should work in conjunction with the explicit absolute paths in your `index.html`.
2.  **Adjusted `publish_dir` in `.github/workflows/deploy.yml`**: I've changed `publish_dir: ./public` to `publish_dir: public` in the `peaceiris/actions-gh-pages` action. This is a subtle change in how the action interprets the source directory for deployment, and it might resolve issues with the copying mechanism, ensuring all build artifacts are correctly moved to the GitHub Pages branch.

Please push the latest commit to your repository. This will trigger the GitHub Actions workflow. Once the workflow completes and your page is redeployed, please verify if your website content is now displayed correctly.

After you confirm the page is fully functional, we can then proceed with the task of replacing CDN and external links, which is the next item on our to-do list.