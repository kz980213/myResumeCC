import { Link, NavLink } from 'react-router-dom'
import { Download, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/projects', label: '项目经历' },
  { to: '/skills', label: '技能栈' },
  { to: '/about', label: '关于我' },
  { to: '/articles', label: '技术文章' },
  { to: '/contact', label: '联系我' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-mono-code text-sm font-bold bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded text-xs tracking-tight">
            KZ
          </span>
          <span className="font-semibold text-foreground text-[15px]">孔政</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm rounded-md transition-colors relative ${
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Button size="sm" variant="outline" asChild className="hidden sm:inline-flex text-xs border-border text-muted-foreground hover:text-foreground hover:border-primary/50">
            <a href="/resume.pdf" download>
              <Download className="w-3.5 h-3.5 mr-1.5" />
              下载简历
            </a>
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden px-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border w-64 pt-12">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-sm rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-4 px-4">
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href="/resume.pdf" download>
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      下载简历
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
