import * as React from "react"
import { FC, PropsWithChildren } from "react";

interface SectionProps {
    style: "standard" | "alt";
    heading: string;
    bgColor: string;
    image?: React.ReactElement;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
    style,
    heading,
    bgColor,
    image,
    children,
}: PropsWithChildren<SectionProps>) => {
    const styleProps = `${bgColor} `

    return (
        <section
            className={`py-24 2xl:px-64 lg:px-48 md:px-24 px-12 ${
                style === "alt" ? `${styleProps} 2xl:text-right` : styleProps
            }`}
        >
            <div className="2xl:flex 2xl:gap-36">
                <div className={`self-center ${style === "alt" ? " pb-8 xl:pb-0 xl:order-last" : ""}`}>
                    <h2 className="font-playfair mb-12 tracking-tight leading-none text-4xl lg:text-5xl">
                        {heading}
                    </h2>
                    <div className="font-playfair"> {children}</div>
                  
                </div>
                {image && (
                    <div className="pt-8 shrink-0 flex justify-center self-center">
                        <div className="md:shrink-0">{image}</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section;
