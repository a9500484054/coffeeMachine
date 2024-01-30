import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onPost('/api/data').reply(config => {
  const { headers } = config;
  

  if (
    headers['Content-Type'] === 'application/json' &&
    headers.Authorization === 'Bearer 12345'
  ) {

    return [
      200,
      {
        success: true,
        data: {
          
        },
      },
    ];
  } else {
   
    return [
      400,
      {
        success: false,
        error: 'Неверные заголовки запроса',
      },
    ];
  }
});