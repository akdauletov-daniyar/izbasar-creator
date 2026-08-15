import { chromium } from 'playwright'
const OUT = process.argv[2]
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
await p.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 })
await p.waitForTimeout(2500)
const y = await p.evaluate(() => document.querySelector('#about .card').getBoundingClientRect().top + scrollY)
await p.evaluate((v) => scrollTo(0, Math.max(0, v - 60)), y)
await p.waitForTimeout(400)
await p.screenshot({ path: `${OUT}/t-approach.png` })
await b.close()
