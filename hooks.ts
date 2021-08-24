import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = <T extends Element = HTMLDivElement>(
  props: {
    once?: boolean
    margin?: number
  } = {}
): [React.RefObject<T>, boolean] => {
  const defaults = {
    margin: 200,
    once: true,
  }
  const targetRef = useRef<T>(null)
  const [isIntersected, setIsIntersected] = useState(false)
  const margin = props.margin === undefined ? defaults.margin : props.margin
  const once = props.once === undefined ? defaults.once : props.once

  useEffect(() => {
    if (targetRef.current === null) {
      return
    }

    const observer = new IntersectionObserver(
      (changes) => {
        changes.forEach((change) => {
          setIsIntersected(change.isIntersecting)

          // 一回切りで監視をやめる
          if (change.isIntersecting && once) {
            observer.disconnect()
          }
        })
      },
      { rootMargin: `0px 0px -${margin}px` }
    )
    observer.observe(targetRef.current)

    return () => observer.disconnect()
  }, [margin, once])

  return [targetRef, isIntersected]
}
