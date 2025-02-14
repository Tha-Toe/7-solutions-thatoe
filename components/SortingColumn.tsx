import { Item } from '@/types'

interface SortingColumnProps {
  title: string
  items: Item[]
  onItemClick: (item: Item) => void
}

export default function SortingColumn({ title, items, onItemClick }: SortingColumnProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onItemClick(item)}
            className={`py-2 px-4 rounded transition-colors ${
              item.type === 'Fruit'
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-orange-500 hover:bg-orange-600'
            } text-white`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
} 