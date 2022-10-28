import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import { ReactNode } from 'react'
interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function UsesLayout({ children, content }: Props) {
  const { name } = content

  return (
    <>
      <PageSEO title={`Kullandıklarım - ${name}`} description={`Ne Kullanıyorum - ${name}`} />
      <div className="pt-8">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Ne Kullanıyorum
          </h1>
          <span className="text-gray-700  dark:text-gray-300">
          {' '}
            <a
              href="https://wesbos.com/uses"
              className="underline-magical"
              target="_blank"
              rel="noreferrer"
            >
             Wesbos'tan  
            </a> 
             ilham alındı
          </span>
        </div>
        <div className="text-sm md:text-lg text-justify pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
