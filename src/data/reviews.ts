/**
 * Google reviews, copied by hand from the business listing (last checked 11 November 2026).
 * Update `rating`, `count` and the quotes here when new reviews come in. Quote reviewers word for word;
 * mark anything left out with an ellipsis.
 */
export const google = {
  rating: 5.0,
  count: 4,
  url: 'https://www.google.com/maps/place/Outdoor+Transylvania+Fly+Fishing+Romania/@46.8655059,23.0267836,17z/data=!4m8!3m7!1s0x4748f16d1cfa7669:0xe3ee2d293952194a!8m2!3d46.8655059!4d23.0267836!9m1!1b1!16s%2Fg%2F11rg7pyrl9',
  /** Newest first: the first entry is shown as the latest review in the floating badge. */
  reviews: [
    {
      name: 'Horea M.',
      when: '5 months ago',
      /** One sentence from the review, word for word, for the floating badge. */
      short: 'Sebastian attended me, pure novice, with patience and illustrative explanations while advancing new techniques, tips and tricks to the more experienced company.',
      text: 'During the couple of days spent together, Sebastian unveiled the horizon of fly/nymph fishing for grayling. … The picture-postcard locations for fishing were carefully studied and his experience allowed us to have some beautiful catches. Sebastian attended me, pure novice, with patience and illustrative explanations while advancing new techniques, tips and tricks to the more experienced company.',
    },
    {
      name: 'Robin Z.',
      when: '2 years ago',
      short: 'Sebastian is a great teacher and we learned fast even as beginners.',
      text: 'We fished 2 days with Sebastian. The guiding was top, the river and nature are very beautiful. Sebastian is a great teacher and we learned fast even as beginners. The rented equipment is High-End (Orvis, Sage, Etc. ) Everybody caught good fishes and it was totally worth it! I would recommend this guide to everyone! Thanks Sebastian!',
    },
  ],
};
