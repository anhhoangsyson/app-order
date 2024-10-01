import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của Productic, được tạo bởi Được dev'
}

export default function Home() {
  return <main>Xin chào

    <Button variant={'ghost'} size={'sm'}  >djt me rito</Button>
    <Input type='text' name='first-name' />
    <h1 className='text-mini text-red-custom'>dit me rito</h1>
    <ModeToggle/>
    <div className="bg-warning text-warning-foreground">
    </div>

  </main>
}
