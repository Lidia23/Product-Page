import { PostData, ApiResponse } from './types';

export async function getPosts(
  page: number,
  limit: number,
): Promise<{ products: PostData[]; total: number; limit: number; skip: number }> {
  const skip = page * limit;
  const response = await fetch(`${process.env.REACT_APP_API_URL}?limit=${limit}&skip=${skip}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }

  const body = (await response.json()) as ApiResponse;
  assertIsPosts(body);
  return { products: body.products, total: body.total, limit: body.limit, skip: body.skip };
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
