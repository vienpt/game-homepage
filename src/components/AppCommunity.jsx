import SectionTitle from "./SectionTitle.jsx";

export default function AppCommunity() {
  return (
    <section id="community" className="pt-40">
      <SectionTitle
        hasImage={true}
        text="Happy clients"
      />
      <div id="carousel" className="pt-10 font-['Nunito'] overflow-hidden" aria-labelledby="carouselheading">
        <ul className="md:block hidden relative overflow-visible">
          <li className="z-10 absolute w-[50%] left-[8%] top-[10%] -translate-x-1/2 -translate-y-1/2">
            <img className="absolute opacity-[0.4]" src={'/community.png'} alt="community" />
            <article className="top-6 absolute">
              <img className="mx-auto w-[60%] md:w-[20%] lg:w-[15%] opacity-[0.4]" src={'/svg/start.svg'} alt="start-icon" />
              <p className="text-center pt-1.5 lg:pt-3 text-sm opacity-[0.4]">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mx-auto py-1.5 lg:py-3 opacity-[0.4]" src={'/svg/community-2.svg'} alt="guy hawkins" />
              <p className="text-center md:text-lg font-bold capitalize opacity-[0.4]">Guy Hawkins</p>
            </article>
          </li>
          <li className="relative z-20">
            <img className="hidden md:block mx-auto" src={'/community.png'} alt="esther howard" />
            <article className="absolute md:top-[41%] lg:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <figure className="relative">
                <img className="img-quote absolute top-[-2.5rem] lg:top-[-3.2rem] right-0 ml-auto mr-6 lg:-mr-12" src={'/svg/quote.svg'} alt="quote" />
              </figure>
              <img className="mx-auto w-[60%] md:w-[20%] lg:w-auto" src={'/svg/start.svg'} alt="start-icon" />
              <p className="text-center pt-1.5 lg:pt-3 leading-[-0.326px] md:text-[16px] md:w-[600px] lg:w-[651px]">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mx-auto py-1.5 lg:py-3" src={'/svg/community-1.svg'} alt="community-1" />
              <p className="text-center md:text-lg font-bold capitalize">Esther Howard</p>
            </article>
          </li>
          <li className="absolute w-1/2 right-[-35rem] top-[10%] -translate-x-1/2 -translate-y-1/2 z-10">
            <img className="absolute opacity-[0.5]" src={'/community.png'} alt="cody fisher" />
            <article className="top-6 absolute">
              <img className="ml-[26rem] w-[60%] md:w-[20%] lg:w-[12%] opacity-[0.4]" src={'/svg/start.svg'} alt="start-icon" />
              <p className="ml-72 text-center pt-1.5 lg:pt-3 text-sm md:w-[600px] lg:w-[651px] opacity-[0.4]">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mx-auto py-1.5 lg:py-3 opacity-[0.4]" src={'/svg/community-3.svg'} alt="community-3" />
              <p className="text-center md:text-lg font-bold capitalize opacity-[0.4]">Cody Fisher</p>
            </article>
          </li>
        </ul>
        <div className="hidden md:flex items-center justify-center -mt-10">
          <img src={'/svg/community-dot.svg'} alt="community-dot" height="26" width="150"/>
        </div>
      </div>
      <ul className="relative md:hidden flex flex-col -space-y-16">
        <li className="!mx-0">
          <figure className="relative flex items-center justify-center mx-auto">
            <img className="img-quote absolute w-[42px] top-[-0.7rem] right-0 ml-auto mr-10" src={'/svg/quote.svg'} alt="quote" />
            <img className="h-[450px]" src={'/community.png'} alt="community" width="500" height="500" />
            <article className="absolute flex flex-col items-center -mt-20">
              <img className="w-[20%] mb-2" src={'/svg/start.svg'} alt="start-icon" />
              <p className="text-center text-xs mx-7">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mt-3" src={'/svg/community-2.svg'} alt="community-1" />
              <p className="text-center md:text-lg font-bold capitalize">Guy Hawkins</p>
            </article>
          </figure>
        </li>
        <li>
          <figure className="relative flex items-center justify-center mx-auto">
            <img className="img-quote absolute w-[42px] top-[-0.7rem] right-0 ml-auto mr-10" src={'/svg/quote.svg'} alt="quote" />
            <img className="h-[450px]" src={'/community.png'} alt="community" width="500" height="500" />
            <article className="absolute flex flex-col items-center -mt-20">
              <img className="w-[20%] mb-2" src={'/svg/start.svg'} alt="start-icon" />
              <p className="text-center text-xs mx-7">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mt-3" src={'/svg/community-1.svg'} alt="community-1" />
              <p className="text-center md:text-lg font-bold capitalize">Esther Howard</p>
            </article>
          </figure>
        </li>
        <li>
          <figure className="relative flex items-center justify-center mx-auto">
            <img className="img-quote absolute w-[42px] top-[-0.7rem] right-0 ml-auto mr-10" src={'/svg/quote.svg'} alt="quote" />
            <img className="h-[450px]" src={'/community.png'} alt="community" width="500" height="500" />
            <article className="absolute flex flex-col items-center -mt-20">
              <img className="w-[20%] mb-2" src={'/svg/start.svg'} alt="start-icon" />
              <p className="text-center text-xs mx-7">
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                <br />
                <br />
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
              </p>
              <img className="mt-3" src={'/svg/community-3.svg'} alt="community-3" />
              <p className="text-center md:text-lg font-bold capitalize">Cody fisher</p>
            </article>
          </figure>
        </li>
      </ul>
    </section>
  )
}