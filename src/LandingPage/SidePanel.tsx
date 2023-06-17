import notif from "../assets/icons/notif.svg";
import eye from "../assets/icons/eye.svg";
import logo from "../assets/icons/logo.svg";
import appSS from "../assets/Cohorts.png";
import TestimonialCard from "../components/TestimonialCard";
import NotifMarque from "../components/NotifMarque";

import { ScrollContainer } from "react-indiana-drag-scroll";

function SidePanel() {
  return (
    <div className="w-7/12 flex flex-col gap-5 text-[#F2F2F2] lg:hidden xl:ml-6 ml-14 mr-0">
      <div className="flex-1"></div>
      <div className="flex-1 flex gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <img src={notif} className="w-8 h-8" />
          <h4
            className="text-3xl"
            style={{
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0 0 1px #000, 0 0 1px #000, 0 0 1px #000,0 0 2px #000,0 0 2px #000 ",
            }}
          >
            Get notified when a <br />
            highly correlated
            <br /> whale makes a move
          </h4>
          <p className="opacity-[0.7] font-medium leading-tight">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="w-full relative">
            <NotifMarque />
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex-1 flex gap-10">
        <div className="flex-1">
          <img src={appSS} className="" />
        </div>
        <div className="flex-1 flex flex-col gap-4 mt-8 text-right pr-14 xl:pr-6">
          <img src={eye} className="ml-auto w-8 h-8" />
          <h4 className="text-3xl">
            Watch what the
            <br /> whales are doing
          </h4>
          <p className="opacity-[0.7] font-medium leading-tight">
            All whales are not equal. Know exactly
            <br /> what the whales impacting YOUR <br />
            portfolio are doing.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="text-right pr-14 xl:pr-6 mb-10">
          <h5 className="mb-5 text-2xl font-medium">Testimonials</h5>
          <hr className="w-full h-0 border border-[#E5E5E6] opacity-50" />
        </div>
        <div className="flex items-end gap-10">
          <img src={logo} className="w-16 h-16" />
          <ScrollContainer className="flex flex-1 gap-5 overflow-scroll py-1 pr-14">
            <TestimonialCard
              title="Jack F"
              subtitle="Ex Blackrock PM"
              content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
            />
            <TestimonialCard
              title="Yash P"
              subtitle="Research, 3poch Crypto Hedge Fund"
              content="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
            />
            <TestimonialCard
              title="Shiv S"
              subtitle="Co-Founder Magik Labs"
              content="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
            />
          </ScrollContainer>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default SidePanel;
