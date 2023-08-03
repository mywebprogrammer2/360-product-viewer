import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const ProtectedComponent = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.auth)
  // const router = useRouter()
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push('/')
  //   }
  // }, [isLoggedIn])

  return isLoggedIn ? children : null
}

export default ProtectedComponent
