
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from './ThemeProvider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-3 py-2 shadow-lg">
      <Sun className={`h-4 w-4 transition-colors ${isDark ? 'text-muted-foreground' : 'text-yellow-500'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-800 data-[state=unchecked]:bg-yellow-400"
      />
      <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </div>
  )
}

export default ThemeToggle
