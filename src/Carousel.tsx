import React, { useState, useEffect, useRef, Dispatch, ReactNode } from 'react'
import { useOnScreen } from './hooks'
import styles from './index.module.css'

export interface DataCardProps {
  image: string
  title: string
  category?: string
  description: string
  uri: string
}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const DataCard = ({
  image,
  title,
  category,
  description,
  uri
}: DataCardProps) => {
  return (
    <div className={styles['data-card']} onClick={() => openInNewTab(uri)}>
      <img src={image} alt={`${title} preview`} className={styles['image']} />
      <h2 className={styles['title']}>
        {title}{' '}
        {category && <span className={styles['category']}>| {category}</span>}
      </h2>
      <h3 className={styles['description']}>{description}</h3>
    </div>
  )
}

interface PaginationProps {
  active: number
  setActive: Dispatch<number>
  count: number
}

interface TabProps {
  active: boolean
}

const Pagination = ({ active, setActive, count }: PaginationProps) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useOnScreen(ref)

  const interval = 10
  useEffect(() => {
    const timer = setTimeout(() => {
      let a
      if (active >= count - 1) {
        a = 0
      } else {
        a = active + 1
      }
      setActive(a)
    }, interval * 1000)
    if (!isVisible) {
      clearTimeout(timer)
    }
    return () => clearTimeout(timer)
  }, [active, count, setActive, isVisible])

  const Tab = ({ active = false }: TabProps) => {
    return (
      <div className={styles['pagination-tab']}>
        {active && (
          <div
            className={styles['active']}
            style={{
              animation: `${styles['progress']} infinite ${interval}s linear`
            }}
          />
        )}
      </div>
    )
  }

  return (
    <div className={styles['pagination-tabs']} ref={ref as any}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActive(index)
            }}
          >
            <Tab active={index === active} {...{ index, setActive }} />
          </button>
        ))}
    </div>
  )
}

interface CarouselProps {
  title?: string | ReactNode
  pageLength?: number
  data: DataCardProps[]
  showBottomNavMobile?: boolean
}

export const Carousel = ({
  title,
  pageLength = 5,
  data,
  showBottomNavMobile = true
}: CarouselProps) => {
  const [active, setActive] = useState<number>(0)

  return (
    <div>
      <div className={styles['carousel']}>
        {title && <h2 className={styles['carousel-title']}>{title} </h2>}
        <div className={styles['carousel-pagination']}>
          <Pagination
            {...{
              active,
              setActive,
              count: Math.ceil(data.length / pageLength)
            }}
          />
        </div>
      </div>
      <div className={styles['carousel-grid']}>
        {data
          .slice(active * pageLength, (active + 1) * pageLength)
          .map(({ ...props }: DataCardProps) => {
            return <DataCard key={props.title} {...props} />
          })}
      </div>
      {showBottomNavMobile && (
        <div className={styles['carousel-pagination-end']}>
          <Pagination
            {...{
              active,
              setActive,
              count: Math.ceil(data.length / pageLength)
            }}
          />
        </div>
      )}
    </div>
  )
}
