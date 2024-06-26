import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { pink } from '@mui/material/colors'
import { Typography } from '@mui/material'
import ModeToggle from './ModeToggle'
// import Brightness4Icon from '@mui/icons-material/Brightness4'
// import Brightness7Icon from '@mui/icons-material/Brightness7'
// import { Switch, FormControlLabel, useColorScheme } from '@mui/material'

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <IconButton
//         color="inherit"
//         onClick={() => {
//           setMode(mode === 'light' ? 'dark' : 'light')
//         }}
//       >
//         {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
//       </IconButton>
//       <Typography variant="body1" color="inherit">
//         {mode === 'light' ? 'light mode' : 'dark mode'}
//       </Typography>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>Hungnt</div>

      <Typography variant="subtitle1" color={pink[500]}>
        Cộng hòa xã hội chủ nghĩa Việt Nam
      </Typography>
      <Typography>Cộng hòa xã hội chủ nghĩa Việt Nam</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
      <br />
      <FavoriteBorderIcon color="success" sx={{ color: pink[500] }} />
    </>
  )
}

export default App
