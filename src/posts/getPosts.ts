import { PostData, ApiResponse } from './types';

export async function getPosts(): Promise<PostData[]> {
  const response = await fetch(process.env.REACT_APP_API_URL!);
  const body = (await response.json()) as ApiResponse;
  assertIsPosts(body);
  return body.products;
}

export function assertIsPosts(data: any): asserts data is ApiResponse {
  if (!data || !Array.isArray(data.products)) {
    throw new Error("data doesn't contain a products array");
  }
  data.products.forEach((post: any) => {
    if (!('id' in post)) {
      throw new Error("post doesn't contain id");
    }
    if (typeof post.id !== 'number') {
      throw new Error('id is not a number');
    }
    if (!('title' in post)) {
      throw new Error("post doesn't contain title");
    }
    if (typeof post.title !== 'string') {
      throw new Error('title is not a string');
    }
    if (!('description' in post)) {
      throw new Error("post doesn't contain description");
    }
    if (typeof post.description !== 'string') {
      throw new Error('description is not a string');
    }
  });
}
