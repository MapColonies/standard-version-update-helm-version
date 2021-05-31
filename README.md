# standard-version-update-helm-version

A hook for updating `Chart.yml` file using `standard-version` npm package.


# Installation
```sh
npm i --save-dev @map-colonies/standard-version-update-helm-version
```

# Setup
Create a file named `.versionrc`
```json
{
  "bumpFiles": [
    {
      "filename": "/path/to/Chart.yml",
      "updater": "/node_modules/@map-colonies/standard-version-update-helm-version/src/index.js"
    }
  ]
}
```
