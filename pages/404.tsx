import Link from '@/components/Link'
import MainLayout from '@/layouts/MainLayout'

export default function FourZeroFour() {
  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
            404 ERROR
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Üzgünüz, bu sayfayı bulamadık.
          </p>
          <p className="mb-8">
            Ama merak etmeyin, ana sayfamızda pek çok başka şey bulabilirsiniz.
          </p>
          <Link href="/">
            <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500">
            AnaSayfaya geri dön
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
