import { useCallback, useEffect, useState } from "react"
import { HttpService } from "services"

export const useRequest = (...args) => {
  const [data, setData] = useState(null)

  const makeRequest = useCallback(async () => {
    const res = await HttpService[args[0]]?.(...args.slice(1))
    setData(res)
  }, [setData])

  useEffect(() => {
    makeRequest(req)
  }, [req, makeRequest])

  return data
}