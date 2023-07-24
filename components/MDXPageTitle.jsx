import Sep from '@/components/Sep'
import classNames from 'clsx'

const PageTitle = ({ children, className }) => (
  <div className="-mt-3 md:m-0">
    <div className="px-6 pt-14 pb-2 md:bg-none md:p-0">
      {children}
    </div>
    <Sep className="md:bg-none" line />
  </div>
)

export default PageTitle
