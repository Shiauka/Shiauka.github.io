export interface Episode {
  ep: number
  title: string
  desc: string
  youtubeId: string   // 填入 YouTube 影片 ID（網址 ?v= 後面那段）
}

export const episodes: Episode[] = [
  {
    ep: 1,
    title: '為什麼我這樣配置資產？先從理念說起',
    desc: '分享退休自由的核心目標，以及「只碰看得懂的東西」與「做好分散」兩大投資原則。',
    youtubeId: 'ubbBe8yiGRs',
  },
  {
    ep: 2,
    title: '把資產分成五個桶子，讓每一塊錢各司其職',
    desc: '介紹五桶框架：核心桶 35%、攻擊桶 30%、全球分散桶 15%、另類資產桶 5%、現金防禦桶 15%。',
    youtubeId: 'F84a4rHzpKM',
  },
  {
    ep: 3,
    title: '兩個帳戶，各司其職——台幣和美元怎麼分開管？',
    desc: '台灣帳戶 vs 海外帳戶的分工邏輯，複委託 vs 直接持有的差異，以及美國遺產稅的應對策略。',
    youtubeId: 'BxhPJN7Lzug',
  },
  {
    ep: 4,
    title: '投資紀律，才是真正的護城河',
    desc: '為什麼長期報酬的最大敵人是自己？建立投資紀律的具體方法。',
    youtubeId: 'Gcahm9hP8BM',
  },
  {
    ep: 5,
    title: '再平衡的藝術：什麼時候動，怎麼動，動多少？',
    desc: '再平衡的觸發條件、執行策略，以及如何在不影響稅務的前提下調整配置。',
    youtubeId: 'ccL8Xj2njm4',
  },
  {
    ep: 6,
    title: '我如何選 ETF？費用率、流動性、稅務一次講清楚',
    desc: '選 ETF 的三大核心指標，以及我在台灣和美國市場各自的選擇邏輯。',
    youtubeId: '7VmHeV898zc',
  },
  {
    ep: 7,
    title: '0050 還是 VOO？台美 ETF 的比較與我的選法',
    desc: '深度比較台灣與美國指數型 ETF，從費用率、成分股、稅務到實際操作的完整分析。',
    youtubeId: 'ZFfkXlwAZyI',
  },
  {
    ep: 8,
    title: '攻擊桶的邏輯：QQQ 與 00631L 我為什麼這樣用',
    desc: '為什麼要有「攻擊桶」？槓桿 ETF 的風險與使用時機，以及我的實際配置比例。',
    youtubeId: 'p9P87dvGRJw',
  },
  {
    ep: 9,
    title: '全球分散桶：為什麼我不只買美股？',
    desc: '非美成熟市場（VEA）與新興市場（VWO）的配置邏輯，以及全球分散的真實意義。',
    youtubeId: 'mDB74o_Ee4c',
  },
  {
    ep: 10,
    title: '黃金在我的投資組合裡扮演什麼角色？',
    desc: '黃金不是「投機」，而是系統性風險的保險。分析 IAU 在另類資產桶的定位與比例選擇。',
    youtubeId: 'ZVEiWBcJK60',
  },
  {
    ep: 11,
    title: '比特幣：我為什麼只配置 3%，而且不後悔',
    desc: '不談信仰，純粹從倉位管理角度說清楚：為什麼是 3%、為什麼不是 0，以及為什麼選 IBIT 而不是直接買幣。',
    youtubeId: '_dHOCqeYI4s',
  },
  {
    ep: 12,
    title: '現金防禦桶：SGOV 的邏輯與防禦桶的真正用途',
    desc: '現金防禦桶不是放著不動，而是讓你在市場崩跌時有子彈。分析 SGOV 的選擇邏輯與防禦桶的實際運作。',
    youtubeId: 'mzA88Hr0M5M',
  },
  {
    ep: 13,
    title: '緊急備用金：要放多少，放在哪裡？',
    desc: '「三到六個月生活費」這個說法不夠精確。用固定支出和彈性支出的區分，算出真正需要的數字，以及選對工具放對地方。',
    youtubeId: 'G3x3rNCOKwI',
  },
]
