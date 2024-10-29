import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blogs.ajaymandal.me/",
  author: "Ajay Mandal",
  profile: "https://ajaymandal.me/",
  desc: "A minimal, responsive and SEO-friendly personal blog website.",
  title: "Ajay's Space",
  ogImage: "astropaper-og.jpg", // To be replaced
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true
};

export const LOCALE = {
  lang: "en", 
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ajay-mandal",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-mandal",
    linkTitle: `Connect ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ajayrox48@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/lord_zexa",
    linkTitle: `Follow ${SITE.title} on Twitter`,
    active: true,
  }
];
