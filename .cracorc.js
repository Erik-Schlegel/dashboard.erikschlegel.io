const path = require('path');

module.exports = {
   // ...
   webpack: {
      alias: {
         '_atoms': path.resolve(__dirname, 'src/components/atoms/'),
         '_molecules': path.resolve(__dirname, 'src/components/molecules/'),
         '_organisms': path.resolve(__dirname, 'src/components/organisms/'),
         '_templates': path.resolve(__dirname, 'src/components/templates/'),
         '_pages': path.resolve(__dirname, 'src/components/pages/'),

         '_images': path.resolve(__dirname, 'src/assets/images/'),
         '_types': path.resolve(__dirname, 'src/types/'),
         '_context': path.resolve(__dirname, 'src/context/'),
         '_store': path.resolve(__dirname, 'src/store/'),
         '_hooks': path.resolve(__dirname, 'src/hooks/'),
      },
      plugins: {
         add: [ /* ... */],
         remove: [ /* ... */],
      },
      configure: { /* ... */ },
      configure: (webpackConfig, { env, paths }) => {
         /* ... */
         return webpackConfig;
      },
   },
};