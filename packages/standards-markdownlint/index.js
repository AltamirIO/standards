const markdownlint = require('markdownlint') // dev dependency
const glob = require('glob') // dev dependency
const color = require('cli-color') // dev dependency

/**
 * Lint all markdown files in a directory.
 * @function
 * @param {string} topLevelDirectory - The directory to lint (no trailing slash).
 */
const mdlint = function(topLevelDirectory) {
  const options = {
    files: glob.sync(`${topLevelDirectory}/**/*.md`),
    config: markdownlint.readConfigSync(__dirname + '/markdownlint.json'),
  }

  return markdownlint(options, (err, result) => {
    if (!err) {
      console.log(color.red(result.toString()))
    }
  })
}

module.exports = mdlint
