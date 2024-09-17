/* eslint-disable react/no-unescaped-entities */
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function About() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 mt-[4rem] lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading>About Albin</Heading>
          <div className="prose prose-xl prose-slate columns-1 prose-invert col-start-1">
            <p className="text-slate-100 text-2xl">
              With a background in 3D animation and digital media, I combine
              technical prowess and creative vision as a front-end developer. I
              use HTML, CSS, JavaScript, React, D3.js, Python, and other
              technologies to create visually stunning and interactive web
              applications that captivate and deliver results.
            </p>
            <p className="mt-4 text-slate-100 text-2xl ">
              Most recently, I worked with NAXA, where I built React components
              for a landslide risk management system, transforming Figma designs
              into a user-friendly web application that handles landslide risk
              data. I also increased web traffic by 50%, boosted user engagement
              by 40%, and elevated conversion rates by 30% for various projects.
            </p>
            <p className="mt-4 text-slate-100 text-2xl">
              Additionally, I am pursuing a Master's degree in Data Science at
              Tampere University, where I am honing my data-driven expertise.
              This journey equips me with the skills to transform data into
              actionable insights that inform and engage audiences, enhancing my
              proficiency as a Frontend Developer with a genuine passion for the
              world of data science.
            </p>
            <Button linkField="hello" label="Resume" className="mt-12" />
          </div>
          <Avatar />
        </div>
      </div>
    </section>
  );
}
