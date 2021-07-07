var axios = require('axios');

axios
  .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/58/modelos/7294/anos/2020-1')
  .then(function(response) {
    var data = response.data;

    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
