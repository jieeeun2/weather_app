export interface Response {
  location: Location
  current: Current
}

interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

interface Current {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: Condition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

interface Condition {
  text: string
  icon: string
  code: number
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
//이 서버컴포넌트 실행환경이 node이기에 process.env 사용가능

export const getCurrentWeather = async (location: string): Promise<Response> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
  )

  if (!res.ok) throw new Error('날씨 정보를 가져올 수 없습니다.')

  return res.json()
}