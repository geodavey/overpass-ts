import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/overpass-ts.ts",
    output: [
      {
        name: "overpass-ts",
        file: "dist/overpass-ts.js",
        format: "umd",
        exports: "default"
      },
    ],
    external: ["isomorphic-fetch"],
    plugins: [typescript()],
  },
];