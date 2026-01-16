I have committed a change to your `webpack.config.js` file to set the `output.publicPath` to `/Cowardly-Witch/`. This is a common and necessary configuration for GitHub Pages deployments, as it ensures that your application's assets are correctly referenced when served from a subpath.

Please push the latest commit to your repository. This will trigger the GitHub Actions workflow. Once the workflow completes and your page is redeployed, please verify if the blank page issue is resolved. You should see your application content rendered correctly.

After you confirm the page is no longer blank, we can then proceed with the task of replacing CDN and external links, which is still on our to-do list.