import { When } from '@cucumber/cucumber';
import { CustomWorld } from '../world';
import { createApi } from '../utils/api';

When('I create a record via API', async function (this: CustomWorld) {
  const response = await this.page.request.post('http://localhost:3001/api/create', {
    data: { name: 'Test Record' },
  });

  if (!response.ok()) {
    throw new Error(`API call failed with status ${response.status()}`);
  }

  const text = await response.text();

  if (!text) {
    throw new Error('API returned empty response body');
  }

  let json;
  try {
    json = JSON.parse(text);
  } catch (err) {
    throw new Error(`Invalid JSON returned by API: ${text}`);
  }

  this.record = json;
});
