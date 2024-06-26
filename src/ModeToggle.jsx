import { useEffect } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Switch, FormControlLabel, useColorScheme } from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const isDarkMode = mode === 'dark'

  const handleChange = () => {
    setMode(isDarkMode ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    document.body.classList.toggle('light', !isDarkMode)
  }, [isDarkMode])

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={handleChange}
          name="darkModeSwitch"
          color="default"
          icon={<Brightness7Icon sx={{ color: isDarkMode ? 'white' : 'black', margin: '-2px 0 0 -1px' }} />}
          checkedIcon={<Brightness4Icon sx={{ color: !isDarkMode ? 'black' : 'white', margin: '-2px 0 0 -1px' }} />}
          sx={{
            '& .MuiSwitch-thumb': {
              color: 'inherit'
            },
            '& .MuiSwitch-track': {
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
            }
          }}
        />
      }
      label={isDarkMode ? 'Dark mode' : 'Light mode'}
      sx={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}
    />
  )
}

export default ModeToggle
