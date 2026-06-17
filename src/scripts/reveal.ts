// 公開日 19:00（台灣時間）一到，把未公開的項目自動顯示出來，免重新部署網站。
// 用法（建置時依公開日決定初始狀態，前端只負責「時間到了翻過來」）：
//   data-reveal-ts  : 元素一開始帶 `hidden`，時間到了移除 hidden（顯示連結／卡片）
//   data-until-ts   : 元素一開始顯示（如「🔒 即將上線」），時間到了加 hidden（藏起來）
//   data-publish-ts : 卡片時間到了卸掉「未上線」的淡化／虛線樣式
const now = Date.now()

document.querySelectorAll<HTMLElement>('[data-reveal-ts]').forEach(el => {
  if (now >= Number(el.dataset.revealTs)) el.classList.remove('hidden')
})

document.querySelectorAll<HTMLElement>('[data-until-ts]').forEach(el => {
  if (now >= Number(el.dataset.untilTs)) el.classList.add('hidden')
})

document.querySelectorAll<HTMLElement>('[data-publish-ts]').forEach(el => {
  if (now >= Number(el.dataset.publishTs)) {
    el.classList.remove('opacity-50', 'border-dashed')
    el.classList.add('border-gray-200', 'hover:border-brand', 'hover:shadow-md')
  }
})
