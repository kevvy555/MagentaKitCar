# Magenta — British Kit Car Archive (website)

A responsive, static, no-backend website showcasing four **different** Magenta kit cars and the supplied 3D model of the black car.

## Publish with GitHub Pages

The site is configured for **GitHub Pages static hosting from the `main` branch root**. There is no build step, backend, or deployment action required.

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Set the branch to **`main`** and folder to **`/(root)`**, then click **Save**.
4. The public site will appear at **https://kevvy555.github.io/MagentaKitCar/** after the first deployment.

All page-relative resource paths work when served from GitHub’s `/MagentaKitCar/` project subpath. Leave the `.nojekyll` file in the repository root.

## Launch locally

From this directory, run:

```bash
python -m http.server 8080
```

Then visit **http://localhost:8080** in a modern browser. Using an HTTP server is important: browsers may block `.glb` assets on `file://` pages.

The site loads Google model-viewer 4.4.0 from its official CDN and external Wikimedia Commons photographs. **Internet access is needed for these resources.** The black-car photograph and the original, unmodified 58.9 MB GLB are bundled in the GitHub Pages edition. The GLB is transported as 14 gzip-compressed binary parts (28.4 MB in total) and reconstructed in memory using the browser’s native `DecompressionStream` API only when 3D viewing is requested. The model has about 1 million vertices, so it can take time and memory to load, especially on phones.

## What works

- Select any of four cars in the collection to update the featured showcase.
- Switch the featured display between **2D photograph** and **3D model**.
- Rotate and zoom the supplied black-car GLB via the 3D viewer.
- For the other cars, the 3D mode displays **Awaiting 3D generation**.
- Switch among Overview, Technical File, History and Photo Archive tabs.
- Enlarge photographs and open original licensed source pages.
- Fully responsive layout with keyboard-accessible tabs and image dialog.

## Adding more cars / models

Edit the `cars` array near the top of `app.js` to add a car object. Give it a unique `id`, a photograph URL or path in `hero`, an array of `photos`, and set `model` to the `.glb` path when available (otherwise `model: null`). Add new GLB files to `assets/` if they are smaller than GitHub’s 100 MB per-file limit. The black car uses the special `model: "bundled"` setting to stream its losslessly compressed model pieces.

## Provenance and licensing

See [`CREDITS.md`](CREDITS.md). The Wikimedia Commons photographs are CC licensed; credits and links are visible in the UI. Please retain those attributions if publishing.

This is a static concept site, not yet connected to a content-management system or user-upload workflow.