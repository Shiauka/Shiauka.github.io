// 內容公開日閘門：每集／每篇／每個工具都綁一個公開日（YYYY-MM-DD）。
// 「正式上線」時間 = 公開日當天晚上 7 點（台灣 UTC+8）= 11:00 UTC，
// 用固定時區計算，瀏覽器在哪個時區看到的開放時間都一致。
export const TW_OPEN_HOUR_UTC = 11

export function openTs(date: string | Date): number {
  const iso = typeof date === 'string' ? date : date.toISOString().slice(0, 10)
  const [y, m, d] = iso.split('-').map(Number)
  return Date.UTC(y, m - 1, d, TW_OPEN_HOUR_UTC, 0, 0)
}

export function isPublished(date: string | Date, now: number = Date.now()): boolean {
  return openTs(date) <= now
}
