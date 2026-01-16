I have switched the GitHub Actions workflow to use the official GitHub Pages deployment actions (`actions/upload-pages-artifact` and `actions/deploy-pages`). This is the most robust and recommended way to deploy to GitHub Pages and should finally resolve the blank page issue by ensuring all your built assets are correctly deployed.

This change replaces the `peaceiris/actions-gh-pages` action, which was having issues copying your assets.

Please push the latest commit to your repository. This will trigger the updated GitHub Actions workflow. Once the workflow completes and your page is redeployed, please verify if your website content is now displayed correctly.

After we confirm the page is fully functional, we can then proceed with the task of replacing CDN and external links, which is the next item on our to-do list.