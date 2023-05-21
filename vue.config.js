module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    env: {
      test: {
        plugins: ["transform-require-context"],
      },
    },
    pluginOptions: {
      parcel: {
        // Agrega los estilos globales en main.sass
        // para que sean aplicados en todos los componentes
        css: {
          files: [
            {
              path: 'src/styles/main.sass',
            },
          ],
        },
      },
    },
  };
  