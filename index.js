import axios from 'axios';

axios
  .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/58/modelos/7294/anos/2020-1')
  .then((response) => {
    const { data } = response;

    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
