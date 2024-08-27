import { title } from 'process'
import SideNavigation from '../_components/SideNavigation'

export const metadata = {
  title: {
    template: '%s / Account',
    default: 'Account',
  },
}

export default function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  )
}
