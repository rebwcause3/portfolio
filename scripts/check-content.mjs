// Lists every open placeholder/TODO in the content files, so nothing
// unfinished is mistaken for verified fact. Run: npm run check
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = join(process.cwd(), 'src', 'content')
let count = 0

for (const file of readdirSync(dir).filter((f) => f.endsWith('.js'))) {
  readFileSync(join(dir, file), 'utf8')
    .split(/\r?\n/)
    .forEach((line, i) => {
      if (/TODO|DRAFT/.test(line)) {
        count++
        console.log(`  src/content/${file}:${i + 1}  ${line.trim().replace(/^\/\/\s?/, '')}`)
      }
    })
}

console.log(
  count
    ? `\n${count} open item(s). Placeholders are hidden on the live site, but review these before publishing.`
    : '\nNo open placeholders. Content is ready for final review.',
)
