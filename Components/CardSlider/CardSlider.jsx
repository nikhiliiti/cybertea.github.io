import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./CardSlider.css";
import Card from "./Card/Card";
import Autoplay from "embla-carousel-autoplay";

import speakersData from "./speakersData";

export default function CardSlider() {
  const [academicEmblaRef, academicEmblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ speed: 2500, stopOnMouseEnter: true, stopOnInteraction: false, })]
  );

  const [industryEmblaRef, industryEmblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ speed: 4000, stopOnMouseEnter: true, stopOnInteraction: false, })]
  );

  useEffect(() => {
    if (academicEmblaApi) {
      academicEmblaApi.scrollTo(1, true);
    }
    if (industryEmblaApi) {
      industryEmblaApi.scrollTo(2, true);
    }
  }, [academicEmblaApi, industryEmblaApi]);

  const academicSpeakers = speakersData.filter(
    (speaker) => speaker.category === "Academic"
  );
  const industrySpeakers = speakersData.filter(
    (speaker) => speaker.category === "Industry"
  );

  return (
    <div id="speaker_container">
      <div id="speakers">
        <h1 className="heading">Speakers</h1>
        <div className="embla industry" ref={industryEmblaRef}>
          <div className="embla__container">
            {industrySpeakers.map((speaker, index) => (
              <div className="embla__slide" key={index}>
                <Card
                  photo={speaker.photo}
                  name={speaker.name}
                  abt={speaker.abt}
                  link={speaker.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla academic" ref={academicEmblaRef}>
          <div className="embla__container">
            {academicSpeakers.map((speaker, index) => (
              <div className="embla__slide" key={index}>
                <Card
                  photo={speaker.photo}
                  name={speaker.name}
                  abt={speaker.abt}
                  link={speaker.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
