import React, { useState, useEffect } from 'react'
import { ChevronDown, RotateCcw, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"

type Player = {
  id: number;
  color: string;
}

export default function GameBoard() {
  const rows = 11
  const cols = 10
  const [players, setPlayers] = useState<Player[]>([])
  const [highlightedCells, setHighlightedCells] = useState<{[key: number]: Player}>({})
  const [moveHistory, setMoveHistory] = useState<number[]>([])
  const [playerCount, setPlayerCount] = useState(0)

  useEffect(() => {
    // Randomly distribute 10 initial players
    const availablePositions = Array.from({ length: 90 }, (_, i) => i)
    const newPlayers = []
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * availablePositions.length)
      newPlayers.push(availablePositions[randomIndex])
      availablePositions.splice(randomIndex, 1)
    }
    setPlayers(newPlayers)
  }, [])

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }

  const handleCellClick = (cellIndex: number) => {
    setHighlightedCells((prev) => {
      const newHighlightedCells = { ...prev }
      if (cellIndex in newHighlightedCells) {
        delete newHighlightedCells[cellIndex]
      } else if (players.length > 0) {
        const currentPlayer = players[players.length - 1]
        newHighlightedCells[cellIndex] = currentPlayer
      }
      setMoveHistory((history) => [...history, cellIndex])
      return newHighlightedCells
    })
  }

  const handleRedo = () => {
    if (moveHistory.length > 0) {
      const lastMove = moveHistory[moveHistory.length - 1]
      setHighlightedCells((prev) => {
        const newHighlightedCells = { ...prev }
        if (lastMove in newHighlightedCells) {
          delete newHighlightedCells[lastMove]
        } else if (players.length > 0) {
          const currentPlayer = players[players.length - 1]
          newHighlightedCells[lastMove] = currentPlayer
        }
        return newHighlightedCells
      })
      setMoveHistory((history) => history.slice(0, -1))
    }
  }

  const handleAddPlayer = () => {
    setPlayers((prev) => [...prev, { id: prev.length + 1, color: generateRandomColor() }])
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={handleRedo}
            disabled={moveHistory.length === 0}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Redo
          </Button>
        </div>
        <div className="flex mb-1">
          <div className="w-6"></div>
          {Array.from({ length: cols }, (_, i) => (
            <div key={i} className="w-6 text-center text-xs font-bold">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="border-4 border-white">
          {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={rowIndex} className="flex">
              <div className="w-6 h-12 flex items-center justify-center text-xs font-bold">
                {String.fromCharCode(97 + rowIndex)}
              </div>
              {Array.from({ length: cols }, (_, colIndex) => {
                const cellIndex = rowIndex * cols + colIndex
                const hasPlayer = players.includes(cellIndex) && rowIndex < rows - 1
                const highlightedCell = highlightedCells[cellIndex]
                return (
                  <div
                    key={colIndex}
                    className={`w-6 h-12 border border-black flex items-center justify-center cursor-pointer
                      ${rowIndex === rows - 1 ? 'bg-white' : highlightedCell ? '' : 'bg-green-500'}`}
                    style={{ backgroundColor: highlightedCell ? highlightedCell.color : '' }}
                    onClick={() => rowIndex < rows - 1 && handleCellClick(cellIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && rowIndex < rows - 1 && handleCellClick(cellIndex)}
                    aria-pressed={!!highlightedCell}
                    aria-label={`Cell ${String.fromCharCode(97 + rowIndex)}${colIndex + 1}`}
                  >
                    {hasPlayer && <ChevronDown className={`${highlightedCell ? 'text-white' : 'text-red-500'}`} size={16} />}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-8 flex flex-col items-center">
        <Button onClick={handleAddPlayer} className="mb-4 flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Player
        </Button>
        <div className="text-xl font-bold">
          Players: {players.length}
        </div>
      </div>
    </div>
  )
}