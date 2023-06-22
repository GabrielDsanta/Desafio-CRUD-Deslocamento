import { useContext } from 'react'
import { AbilityContext } from './Can'

const CanViewNavLink = props => {
  const { children, navLink } = props

  const ability = useContext(AbilityContext)

  return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
}

export default CanViewNavLink
