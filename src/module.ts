export = function () {
  this.nuxt.options.extensions.push('ts')
  this.extendBuild(config => {
    const ts = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }

    config.module.rules.push(Object.assign({
      test: /((client|server)\.js)|(\.tsx?)$/
    }, ts))

    config.module.rules.forEach(rule => {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = ts
      }
    })

    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }
  })
}
