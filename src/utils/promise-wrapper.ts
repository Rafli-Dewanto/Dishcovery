export function promiseWrapper<T>(promise: Promise<T>): Promise<{ data: T | null; error: Error | null }> {
  return Promise.allSettled([promise]).then(([result]) => {
    if (result.status === 'fulfilled') {
      return { data: result.value, error: null };
    } else {
      return { data: null, error: result.reason };
    }
  });
}
