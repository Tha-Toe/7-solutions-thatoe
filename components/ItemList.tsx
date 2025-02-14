import { Item } from '@/types'

interface ItemListProps {
  items: Item[]
  onItemClick: (item: Item) => void
}

export default function ItemList({ items, onItemClick }: ItemListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Items to Sort</h2>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onItemClick(item)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
} 