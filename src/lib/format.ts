export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function readingTime(body: string): number {
  const minutes = Math.round(body.replace(/\s/g, '').length / 500);
  return Math.max(1, minutes);
}
