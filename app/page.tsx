'use client'

import { useState } from 'react'
import ItemList from '@/components/ItemList'
import SortingColumn from '@/components/SortingColumn'
import { Item } from '@/types'
import itemsList from '@/public/data.json'

export default function Home() {
  const [items, setItems] = useState<Item[]>(itemsList as Item[])
  const [sortedFruits, setSortedFruits] = useState<Item[]>([])
  const [sortedVegetables, setSortedVegetables] = useState<Item[]>([])


  const moveItem = (item: Item) => {
    setItems(current => current.filter(i => i.name !== item.name))
    
    if (item.type === 'Fruit') {
      setSortedFruits(current => [...current, item])
    } else {
      setSortedVegetables(current => [...current, item])
    }

    setTimeout(() => {
      returnItem(item)
    }, 5000)
  }

  const returnItem = (item: Item) => {
    if (item.type === 'Fruit') {
      setSortedFruits(current => current.filter(i => i.name !== item.name))
    } else {
      setSortedVegetables(current => current.filter(i => i.name !== item.name))
    }
    setItems(current => {
      const filterDuplicate = current.filter(i => i.name !== item.name)
      return [...filterDuplicate, item]
    })
  }

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-black text-center mb-5">7solutions's assignment by Tha Toe Saung</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        <ItemList items={items} onItemClick={moveItem} />
        <SortingColumn 
          title="Fruits" 
          items={sortedFruits} 
          onItemClick={returnItem}
        />
        <SortingColumn 
          title="Vegetables" 
          items={sortedVegetables} 
          onItemClick={returnItem}
        />
      </div>
      <span className='text-sm text-gray-500 text-center block mt-20'>Github Source code: <a href="https://github.com/Tha-Toe/7-solutions-thatoe" target="_blank" className="text-blue-500">https://github.com/Tha-Toe/7-solutions-thatoe</a></span>
      <span className="text-sm text-gray-500 text-center block mt-5">My personal website with my projects and experiences: <a href="https://thatoesaung.vercel.app/" target="_blank" className="text-blue-500">https://thatoesaung.vercel.app/</a></span>
      <p className='text-sm text-gray-500 text-center block mt-5'>Thanks for your time and opportunity to apply for 7solutions.</p>
    </main>
  )
}
