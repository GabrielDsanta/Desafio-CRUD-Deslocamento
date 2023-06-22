import { useEffect, useState } from 'react'
import navigation from '../../../navigation/vertical'

const ServerSideNavItems = () => {
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    setMenuItems(navigation)
  }, [])

  return { menuItems }
}

export default ServerSideNavItems
