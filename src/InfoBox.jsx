import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_IMG = "https://images.unsplash.com/photo-1525776759712-7b066ce45de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D"
  const HOT_IMG = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const COLD_IMG = "https://media.istockphoto.com/id/1070035592/photo/woman-with-warm-clothing-feeling-the-cold-inside-house.jpg?s=612x612&w=is&k=20&c=HwCSAySpABHlta-hyEtnnbrLgBD0AKPGv4XsaLOCSQg="
  const RAINY_IMG = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="

  return(
    <div className="InfoBox">
          
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAINY_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG }
          title="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and temperature feels like = {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>          
  </div>
)
}