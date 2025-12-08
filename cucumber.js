module.exports = {
  default: {
    snippets: true,
    require: [
      'features/**/*.ts',
      'hooks/**/*.ts',
      'steps/**/*.ts',
      './world.ts',
      './config/env.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: ["usage", "progress"],
    publishQuiet: true,
    paths: [
      'features/**/*.feature',
    ]
  }
};
