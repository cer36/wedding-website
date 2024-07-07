import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const title = "Claire & Chris' Wedding Party"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
  <header className="flex justify-center content-center text-6xl py-24 bg-slate-50 font-playfair"> <h1>{title}</h1></header>
    <main>


    
    </main>
     </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
return (
  <>
    <title>{title}</title>   
    <link
    key="playfair"
    rel="preload"
    href="/playfair.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    />
  </>
)
}
