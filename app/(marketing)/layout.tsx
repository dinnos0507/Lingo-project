import { Sidebar } from "@/components/ui/sidebar";
import { Footer } from "./footer";
import { Header } from "./header";
type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main className='flex-1 flex flex-col last:items-center justify-items-center'>{children}

      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
