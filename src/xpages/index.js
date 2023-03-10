import Head from "next/head";

import { Inter } from "@next/font/google";
import Highlights from "../Components/Highlights";
import Events from "../Components/Events";
import RootLayout from "../app/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
      <div className="mt-12 flex flex-col pb-5 bg-gray-100 px-10 md:px-48 ">
  <h1 className="text-justify my-8 text-gray-600">
        Welcome to Mechanical Engineering at IIT Gandhinagar. We are a dynamic
        and fast-growing community of faculty, staff, and students. Our students
        receive outstanding education in all areas of Mechanical Engineering. We
        aim to produce graduates who not only have the knowledge and skills to
        become successful engineers and scientists of the future, but also
        well-rounded personalities who are uncompromising on ethics, contribute
        to society, are respectful of and can adapt to their surroundings, and
        prove themselves to be great thinkers and problem solvers in all avenues
        of life. Our faculty members are passionate about teaching and have
        experimented with numerous innovations in pedagogy, in particular the
        learning-by-doing approach. We conduct cutting edge research in
        different fields including desalination and water treatment, fuel cell
        systems, combustion and energetic materials, fluid mechanics, robotics,
        advanced manufacturing, solid mechanics, dynamical systems and chaos,
        and biomaterials. Our students are also placed in some of the best
        academic institutes and industries across the world.
        <br />
        <br /> We welcome you to explore our website and learn more about us!
      </h1>
      <Highlights />
      <Events />
    </div>
      </RootLayout>
    </>
  );
}
