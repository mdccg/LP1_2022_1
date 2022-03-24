import { rivers } from './data/rivers.json'
import { RiverReading } from './models/RiverReading'
import { fetchRiverReadingData } from './services/river_reading_service'
import { saveToCsvFile } from './utils/file_utils'
import { toKehabCase } from './utils/string_utils'

import moment from 'moment'

const generateRiverDataFiles = async (
  city: string,
  riverName: string,
  stationCode: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    city,
    riverName,
    stationCode,
    initialDate,
    finalDate
  )

  let fileName = toKehabCase(city) + '.csv'
  saveToCsvFile(fileName, readings)
  console.log('Planilha do ' + riverName + ' gerada')
}

const lastWeek = moment().subtract(7, 'days').toDate()
const today = moment().toDate()

rivers.forEach(({ city, riverName, stationCode }) => {
  generateRiverDataFiles(city, riverName, stationCode, lastWeek, today)
})