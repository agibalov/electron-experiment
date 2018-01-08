# electron-builder-experiment

**Update 1/8:** there are some weird issues with dependency resolution. Basically, if you use `yarn` to install dependencies, `npm run-script run` doesn't work, while distributions work. If you use `npm` to install dependencies, `run` doesn't work, but distributions are fine.

Use like this:

* Run with `npm run-script run`
* Build Linux dist with `npm run-script dist:linux`
* Build Windows dist with `npm run-script dist:windows` (**NOTE:** this requires **wine 1.8+** to be installed)
