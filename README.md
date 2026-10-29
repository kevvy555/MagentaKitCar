# Magenta — British Kit Car Archive (website)

A responsive, static, no-backend website showcasing four **different** Magenta kit cars and the supplied 3D model of the black car.

## Launch

From this directory, run:

```bash
python -m http.server 8080
```

Then visit **http://localhost:8080** in a modern browser. Using an HTTP server is important: browsers may block `.glb` assets on `file://` pages.

The site loads Google model-viewer 4.4.0 from its official CDN and external Wikimedia Commons photographs. **Internet access is needed for these resources.** The black-car photograph and the supplied 58.9 MB GLB model are bundled locally. The model has about 1 million vertices, so it can take time and memory to load, especially on phones.

## What works

- Select any of four cars in the collection to update the featured showcase.
- Switch the featured display between **2D photograph** and **3D model**.
- Rotate and zoom the supplied black-car GLB via the 3D viewer.
- For the other cars, the 3D mode displays **Awaiting 3D generation**.
- Switch among Overview, Technical File, History and Photo Archive tabs.
- Enlarge photographs and open original licensed source pages.
- Fully responsive layout with keyboard-accessible tabs and image dialog.

## Adding more cars / models

Edit the `cars` array near the top of `app.js` to add a car object. Give it a unique `id`, a photograph URL or path in `hero`, an array of `photos`, and set `model` to the `.glb` path when available (otherwise `model: null`). Add any GLB to `assets/`.

## Provenance and licensing

See [`CREDITS.md`](CREDITS.md). The Wikimedia Commons photographs are CC licensed; credits and links are visible in the UI. Please retain those attributions if publishing.

This is a static concept site, not yet connected to a content-management system or user-upload workflow.