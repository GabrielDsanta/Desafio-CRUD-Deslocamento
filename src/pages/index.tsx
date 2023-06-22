import { useEffect } from 'react'
import { useRouter } from 'next/router'
import FallbackSpinner from '../@core/components/spinner'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    router.replace('/clients/list')
  }, [])

  return <FallbackSpinner sx={1} />
}

export default Home
