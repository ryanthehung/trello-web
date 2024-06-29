import Box from '@mui/material/Box'
import { blueGrey, deepPurple } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark'
            ? '#34495e'
            : theme.palette.primary.light
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Nhân số học ứng dụng"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Wordspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? blueGrey[600] : deepPurple[400]
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' }
            }
          }}
        >
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
          <Tooltip title="Hungnt">
            <Avatar
              alt="Hungnt"
              src="https://avatars.githubusercontent.com/u/128365207?s=80&v=4"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
