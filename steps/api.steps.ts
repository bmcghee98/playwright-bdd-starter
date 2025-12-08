import { When } from '@cucumber/cucumber';
import { CustomWorld } from '../world';
import { createApi } from '../utils/api';

When('I create a record via API', async function (this: CustomWorld) {
  const api = await createApi();
  const response = await api.post('/fake-endpoint', {
    data: { name: 'Test Item' },
  });

  const body = await response.json();
  this.record = body;
});
