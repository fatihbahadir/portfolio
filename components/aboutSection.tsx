import { bebas_neue } from "@/lib/fonts";

const AboutSection = ({ title }: { title: string }) => {
  return (
    <section className="h-screen max-w-screen flex lg:flex-row flex-col items-start justify-center lg:justify-between gap-6 lg:gap-0">
      <div>
        <h2
          className={`${bebas_neue.className} lg:text-[90px] xl:text-[101px] text-6xl leading-[90%] `}
        >
          {title}
        </h2>
      </div>

      <div className="flex flex-col items-start justify-center">
        <p>a</p>
        <p>b</p>
      </div>
    </section>
  );
};

export default AboutSection;
