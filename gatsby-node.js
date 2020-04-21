/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const fs = require("fs")
const buildFolder = "docs"
// exports.onPreInit = () => {
//   if (process.argv[2] === buildFolder) {
//     fs.rmdirSync(path.join(__dirname, buildFolder), { recursive: true })
//     if (fs.existsSync(path.join(__dirname, "public"))) {
//       fs.renameSync(
//         path.join(__dirname, "public"),
//         path.join(__dirname, "public_dev")
//       )
//     }
//   }
// }

exports.onPostBuild = () => {
  fs.rmdirSync(path.join(__dirname, buildFolder), { recursive: true })
  fs.renameSync(
    path.join(__dirname, "public"),
    path.join(__dirname, buildFolder)
  )
  //   if (fs.existsSync(path.join(__dirname, "public_dev"))) {
  //     fs.renameSync(
  //       path.join(__dirname, "public_dev"),
  //       path.join(__dirname, "public")
  //     )
  //   }
}
