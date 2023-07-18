import Sep from '@/components/Sep'
import classNames from 'clsx'

const PageTitle = ({ children, className }) => (
  <div className="-mt-3 md:m-0">
    <div className={classNames('bg-gradient-to-b from-omega-800 to-omega-800 p-6 pb-2 md:bg-none md:p-0', {
        className,
      })}
    >
      {children}
    </div>
    <Sep className="md:bg-none" line />
  </div>
)

export default PageTitle
