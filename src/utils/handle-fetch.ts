import { getErrorMessage } from '@/utils';

export async function handleFetch<T>(
  url: string,
): Promise<[T[] | T | null, string | null]> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const errorMessage = await getErrorMessageFromResponse(res);
      throw new Error(errorMessage || 'Fetch failed');
    }

    const data = await parseResponse<T>(res);
    return [data, null];
  } catch (error) {
    const message = getErrorMessage(error);
    return [null, message];
  }
}

async function getErrorMessageFromResponse(
  res: Response,
): Promise<string | null> {
  const contentType = res.headers.get('Content-Type');
  if (contentType && !contentType.includes('application/json')) {
    return 'Invalid content type in response';
  }

  try {
    const { error } = await res.json();
    const errorMessage = getErrorMessage(error);
    return errorMessage || 'Unknown error';
  } catch (jsonError) {
    return 'Error parsing JSON';
  }
}

async function parseResponse<T>(res: Response): Promise<T[] | T | null> {
  const contentType = res.headers.get('Content-Type');
  if (contentType && contentType.includes('application/json')) {
    const { data } = await res.json();
    return data;
  }
  // TODO: Handle other content types (e.g xml, formData...)
  return null;
}
