import { useContext } from 'react'
import { AbilityContext } from './Can'

const CanViewNavSectionTitle = props => {
  const { children, navTitle } = props

  const ability = useContext(AbilityContext)

  return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null
}

export default CanViewNavSectionTitle
