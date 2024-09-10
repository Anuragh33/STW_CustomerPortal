'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function filter() {
  const searchParams = useSearchParams()
  const route = useRouter()
  const path = usePathname()
  const activeFilter = searchParams?.get('capacity') ?? 'all'

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams)

    params.set('capacity', filter)
    route.replace(`${path}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex border border-primary-800">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Small
      </Button>{' '}
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Medium
      </Button>{' '}
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Large
      </Button>
    </div>
  )
}

function Button({ children, handleFilter, filter, activeFilter }) {
  return (
    <button
      className={`text-xs px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      } `}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}
