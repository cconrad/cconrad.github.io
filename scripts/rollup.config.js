require("dotenv").config();
import { terser } from "rollup-plugin-terser";
const replace = require("@rollup/plugin-replace");
const siteconfig = require("../content/_data/siteconfig");

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    treeshake: false,
    output: [
        {
            file: "assets/js/min.js",
            sourcemap: !isProduction,
            format: "esm"
        }
    ],
    plugins: [
        // Minify JS in production mode
        isProduction && terser()
    ]
};
