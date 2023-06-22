import VerticalAppBarContent from './components/vertical/AppBarContent'
import { useSettings } from '../@core/hooks/useSettings'
import Layout from '../@core/layouts/Layout'
import { useMediaQuery } from '@mui/material'
import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'

const UserLayout = ({ children, contentHeightFixed }) => {
  const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()

  const { settings, saveSettings } = useSettings()

  const hidden = useMediaQuery('1200')
  
  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          navItems: verticalMenuItems
        },
        appBar: {
          content: () => (
            <VerticalAppBarContent />
          )
        }
      }}
    >
      {children}

    </Layout>
  )
}

export default UserLayout
