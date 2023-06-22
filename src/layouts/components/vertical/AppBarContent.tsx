import Box from '@mui/material/Box'

const AppBarContent = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
      </Box>
    </Box>
  )
}

export default AppBarContent
