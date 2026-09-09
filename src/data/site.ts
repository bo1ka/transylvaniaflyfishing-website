export const site = {
  name: 'Transylvania Fly Fishing',
  company: 'Outdoor Transylvania Fly Fishing Romania S.R.L.',
  email: 'transylvaniaflyfishing@yahoo.com',
  phones: ['+40 724 580 508', '+40 751 584 644'],
  whatsapp: '+40724580508',
  season: '1 April to 30 September',
  social: [
    { label: 'Facebook page', href: 'https://www.facebook.com/transylvaniaflyfishing', icon: 'facebook' },
    { label: 'Sebastian on Facebook', href: 'https://www.facebook.com/budeanu.sebastiaan', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/sebastiandbudeanu/', icon: 'instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCJyxUU3s9G_vznLma96rAQQ', icon: 'youtube' },
    { label: 'X (Twitter)', href: 'https://twitter.com/FlyOutdoor', icon: 'x' },
  ],
  partners: [
    ['EFFA', 'http://www.effa.info/', 'logo_effa'],
    ['Classic Fly Rod Craft', 'https://www.etsy.com/ie/shop/ClassicFlyRodCraft', 'logo_massimo'],
    ['FFN Pro Shop', 'https://www.ffnproshop.com/', 'logo_proshop'],
    ['Zefix Fly Fishing', 'https://www.zefixflyfishing.de/', 'logo_zefix'],
    ['Abendsprung', 'https://www.abendsprung.de/', 'logo_abendsprung'],
  ],
};

const oldSite = 'https://www.transylvaniaflyfishing.com/esm-bundled/images';

export const photo = (name: string) => `${oldSite}/jpeg.x1920/${name}.jpg`;
export const logo = (name: string) => `${oldSite}/logos/${name}.png`;

export const tel = (p: string) => `tel:${p.replace(/\s+/g, '')}`;
