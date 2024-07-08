import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../components/section"

const title = "Claire & Chris' Wedding Party"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex justify-center bg-slate-100 text-slate-800 text-xl font-quicksand">
            <div className="w-[1920px]">
      <header className="flex justify-center content-center text-6xl py-24 bg-slate-50 font-playfair"> <h1>{title}</h1></header>
      
      <main>
        <Section style="standard" heading="Hello" image={<StaticImage src="../images/otters.jpeg" alt="Otters" />}>
        <p>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test </p>
        </Section>
      </main>
    </div></div>
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
