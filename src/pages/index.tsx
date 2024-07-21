import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../components/section"

const title = "Claire & Chris' Wedding Party"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex justify-center bg-slate-100 text-slate-800 text-xl font-quicksand">
            <div className="w-[1920px]">
      <header className="flex justify-center content-center text-center text-6xl p-24 bg-orange-50 font-playfair"> <h1>{title}</h1></header>
      
      <main>
        <Section style="standard" bgColor="bg-rose-100" heading="We're getting married!" image={<StaticImage src="../images/CCwedding.jpg" className="rounded-lg" alt="Claire and Chris at a wedding" height={400} width={300} quality={100}/>}>
          <p> On 10th September 2024 we will be getting married in Crete, surrounded by a small number of family members. 
            Whilst we've decided to have a very small ceremony it's still really important to us that we can celebrate our marriage with
            all our family and friends, so we will be having a wedding party on Saturday 28th September and would love if you could join us!</p>
        </Section>

        <Section style="alt" bgColor="bg-orange-50" heading="Party details" image={<StaticImage src="../images/York.jpg" className="rounded-md" alt="York" height={400} width={600} quality={100} />}>
        <p> Saturday 28th September</p>
           <p> 12-5pm</p>
           <p> <a href="https://eagleandchildyork.co.uk/contact" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">The Eagle & Child York</a> (top floor)</p>
          <br></br>
          <p> It will be a very relaxed celebration so please feel free to arrive at any time and stay for however long suits you. 
            A buffet will be available from around 12:30pm, with cake served later in the afternoon.
            If you prefer you can just pop in for a drink.</p>
          <br></br>  
          <p>With the aim of keeping it relaxed we won't be doing any speeches or having a dress code. We also don't expect any gifts. 
            We really just want to spend some time with our family and friends whilst enjoying some food and drink!</p>
        </Section>

        <Section style="standard" bgColor="bg-rose-100" heading="RSVP" image={<StaticImage src="../images/CCcornwall.jpg" className="rounded-lg" alt="Claire and Chris in Cornwall"height={300} width={400} quality={100} />}>
          <p> If you will just be popping in for a drink or cake there's no need to RSVP, but if you would you like to 
            join us for the lunch buffet it would be useful to know so we can make sure we have enough food and are able to cater for any dietary requirements. 
            Please let us know either by completing our <a href="https://forms.gle/xCRbgg3tYdNgRajz9" target="_blank" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">RSVP form</a> or by messaging either one of us by the end of August.</p>
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
