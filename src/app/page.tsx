import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-full mx-5 sm:max-w-5xl md:mx-40 lg:mx-80">
        <h1 className="font-bold text-2xl my-16">sup, I am Rudresh Jha 👋</h1>
        <div>
          <p className="mb-4">
            I&apos;m a full-stack engineer, optimist, and a Bibulous.I am
            proficient in <span className="font-semibold">Typescript</span> and
            <span className="font-semibold">Java</span>. I am currently working
            on SchoolERP.
          </p>
          <p className="mb-4">
            I worked at Tensax, where I worked on RemoteManager , an peer to
            peer project management app. Before this,I have work on several
            projects like Todoist , DevsLab and ProgMemes.
          </p>

          <p>
            Dreaming up ideas and making them come true is where my passion
            lies. You can find my full projects list here.
          </p>
        </div>
      </div>
    </main>
  );
}
