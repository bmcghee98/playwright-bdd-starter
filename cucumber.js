module.exports = {
  default: {
    require: [
      'features/**/*.ts',
      'hooks/**/*.ts',
      './world.ts',
      './config/env.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    publishQuiet: true,
    paths: [
      'features/**/*.feature'
    ]
  }
};
