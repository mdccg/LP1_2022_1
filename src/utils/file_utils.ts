import { RiverReading } from '../models/RiverReading'

import { writeFileSync } from 'fs'
import { join } from 'path'

export const saveToCsvFile = (fileName: string, readings: RiverReading[]) => {
  let { stationCode, city, riverName } = readings[0]

  let csvContent = `${city} (${riverName}): ${stationCode}\n`
  
  csvContent += 'Data e hora,Nível,Vazão\n'
  
  readings.reverse().forEach((r) => {
    const line = `${r.dateTime.toISOString()},${r.level},${r.flow}\n`
    //csvContent = csvContent + line
    //csvContent += line
    csvContent = `${csvContent}${line}`
  })

  const path = join(__dirname + '/../', 'data', fileName)
  writeFileSync(path, csvContent)
}