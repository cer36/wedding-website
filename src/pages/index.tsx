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
        <Section style="standard" bgColor="bg-rose-100" heading="We're getting married!" image={<StaticImage src="../images/CCwedding.jpg" className="rounded-lg" alt="Claire and Chris at a wedding" height={400} width={300} quality={100}/>}>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac laoreet sapien. Suspendisse mollis nisi lacus, imperdiet tempus lectus suscipit nec. 
            Sed volutpat fringilla mauris, vitae ultricies nisl tristique ac. Nulla volutpat, lacus a facilisis semper, sem magna ullamcorper nisl, non mollis quam ligula nec mi. 
            Vestibulum et lectus odio. Integer vel consequat tortor. Maecenas bibendum ex tortor. Duis laoreet vel quam ut convallis. Aenean pulvinar est nec ex pretium varius. 
            Aliquam pulvinar ut augue id tincidunt. Etiam at est odio. Cras velit odio, dictum ac elit non, suscipit posuere tellus. Nulla molestie nisl sit amet ante aliquam, sed dictum nisi faucibus. 
            Aliquam vel augue eu leo egestas iaculis vel vitae urna.</p>
          <br></br>
          <p>Curabitur semper sodales nisl. Curabitur maximus felis eu massa tincidunt elementum. Duis aliquet leo eu nisi placerat, eu cursus lorem gravida. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium arcu vel magna interdum semper. 
            Integer euismod diam eleifend, viverra nisl ut, imperdiet turpis. Maecenas mollis, quam eget aliquam scelerisque, quam eros aliquet mauris, ac gravida sapien felis ut nulla. 
            Sed feugiat lobortis metus vitae dignissim. Nullam ac lacus ac nisi gravida condimentum ac quis odio. Maecenas nulla arcu, euismod vitae eros vel, iaculis vehicula lectus. 
            Pellentesque tempor metus sed mauris vestibulum, eu eleifend mauris maximus. Sed in mi at diam sodales tincidunt.</p>
        </Section>

        <Section style="alt" bgColor="bg-slate-100" heading="Party details" image={<StaticImage src="../images/York.jpg" className="rounded-md" alt="York" height={400} width={600} quality={100} />}>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac laoreet sapien. Suspendisse mollis nisi lacus, imperdiet tempus lectus suscipit nec. 
            Sed volutpat fringilla mauris, vitae ultricies nisl tristique ac. Nulla volutpat, lacus a facilisis semper, sem magna ullamcorper nisl, non mollis quam ligula nec mi. 
            Vestibulum et lectus odio. Integer vel consequat tortor. Maecenas bibendum ex tortor. Duis laoreet vel quam ut convallis. Aenean pulvinar est nec ex pretium varius. 
            Aliquam pulvinar ut augue id tincidunt. Etiam at est odio. Cras velit odio, dictum ac elit non, suscipit posuere tellus. Nulla molestie nisl sit amet ante aliquam, sed dictum nisi faucibus. 
            Aliquam vel augue eu leo egestas iaculis vel vitae urna.</p>
          <br></br>
          <p>Curabitur semper sodales nisl. Curabitur maximus felis eu massa tincidunt elementum. Duis aliquet leo eu nisi placerat, eu cursus lorem gravida. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium arcu vel magna interdum semper. 
            Integer euismod diam eleifend, viverra nisl ut, imperdiet turpis. Maecenas mollis, quam eget aliquam scelerisque, quam eros aliquet mauris, ac gravida sapien felis ut nulla. 
            Sed feugiat lobortis metus vitae dignissim. Nullam ac lacus ac nisi gravida condimentum ac quis odio. Maecenas nulla arcu, euismod vitae eros vel, iaculis vehicula lectus. 
            Pellentesque tempor metus sed mauris vestibulum, eu eleifend mauris maximus. Sed in mi at diam sodales tincidunt.</p>
        </Section>

        <Section style="standard" bgColor="bg-pink-100" heading="RSVP" image={<StaticImage src="../images/CCcornwall.jpg" className="rounded-lg" alt="Claire and Chris in Cornwall"height={300} width={400} quality={100} />}>
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
