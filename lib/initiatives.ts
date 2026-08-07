import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export type Initiative = {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  fullDescription: string;
};

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

type InitiativeContentEntry = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
};

// Update this list to manage content for all current cards in one place.
const initiativeContentList: InitiativeContentEntry[] = [
  {
    slug: 'new',
    title: 'Community System Support',
    description: 'Globe Trek Community Support strengthens community systems and support networks to enhance social cohesion, resilience, and collective action. We facilitate community engagement, capacity building, and resource mobilization to empower communities to address their own challenges effectively.',
    fullDescription:
      'Detailed description for New. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new2',
    title: 'Partnerships ',
    description: 'Globe Trek Community Support builds strong partnerships with communities, governments, civil society organizations, the private sector, and development partners to achieve shared goals. Through collaboration and resource sharing, we strengthen community-led solutions, increase impact, and promote sustainable development for lasting positive change.',
    fullDescription:
      'Detailed description for New 2. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new3',
    title: 'Health',
    description: 'Globe Trek Community Support implements health and well-being initiatives to improve the physical and mental health of individuals and communities. We provide access to healthcare services, health education, nutrition programs, and psychosocial support to promote overall well-being.',
    fullDescription:
      'Detailed description for New 3. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new4',
    title: 'Agribusiness',
    description: 'Globe Trek Community Support supports agribusiness and livelihood initiatives to enhance income generation, food security, and economic resilience. We provide training, resources, and market access to empower individuals and communities to achieve sustainable livelihoods.',
    fullDescription:
      'Detailed description for New 4. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new5',
    title: 'Education',
    description:
      'Globe Trek Community Support believes that education is the foundation of sustainable development and equal opportunity. We promote inclusive, equitable, and quality education by supporting access to learning, improving educational resources, enhancing digital literacy, strengthening vocational and life skills, and creating opportunities for children, youth, and adults to reach their full potential. Through partnerships and community engagement, we empower learners with the knowledge and skills needed to build brighter futures and contribute to sustainable community development..',
    fullDescription:
      'This program supports families by combining direct outreach, practical skills sessions, and access to trusted community resources. It is designed to be flexible so you can easily update goals, activities, and impact notes as the program evolves.'
  },
  {
    slug: 'new6',
    title: 'Environmental Conservation',
    description: 'Globe Trek Community Support is committed to protecting the environment and promoting sustainable natural resource management for present and future generations. We support climate action through tree planting, ecosystem restoration, biodiversity conservation, waste management, environmental education, clean energy promotion, and climate-smart practices. By empowering communities to protect their natural environment, we help build resilient ecosystems, improve livelihoods, and contribute to a healthier and more sustainable planet.',
    fullDescription:
      'Detailed description for New 6. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new7',
    title: 'Child Protection ',
    description: 'Globe Trek Community Support is dedicated to ensuring the safety, well-being, and rights of children. We implement programs that protect children from abuse, neglect, and exploitation, while promoting their health, education, and overall development. By collaborating with families, communities, and authorities, we create a supportive environment where every child can thrive.',
    fullDescription:
      'Detailed description for New 7. Update this text anytime in the initiativeContentList for easy maintenance.'
  },
  {
    slug: 'new8',
    title: 'Youth Empowerment',
    description: 'Globe Trek Community Support empowers young people to become active leaders and agents of positive change. We provide mentorship, leadership training, skill development, and opportunities for youth to engage in community service, advocacy, and decision-making processes. By fostering the potential of young individuals, we contribute to building a vibrant, responsible, and future-ready generation.',
    fullDescription:
      'Detailed description for New 8. Update this text anytime in the initiativeContentList for easy maintenance.'
  }
];

const initiativeContentBySlug = Object.fromEntries(
  initiativeContentList.map((item) => [item.slug, item])
) as Record<string, InitiativeContentEntry>;

function formatTitleFromFileName(fileName: string) {
  const baseName = fileName.replace(/\.[^.]+$/, '');
  const words = baseName
    .replace(/[_-]+/g, ' ')
    .replace(/(\D)(\d)/g, '$1 $2')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getSlug(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getInitiatives(): Initiative[] {
  const assetsPath = join(process.cwd(), 'public', 'assets');

  const images = readdirSync(assetsPath)
    .filter((fileName) => {
      const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
      if (!imageExtensions.has(extension)) {
        return false;
      }

      return Boolean(initiativeContentBySlug[getSlug(fileName)]);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return images.map((fileName, index) => {
    const slug = getSlug(fileName);
    const title = formatTitleFromFileName(fileName) || `Initiative ${index + 1}`;
    const content = initiativeContentBySlug[slug];

    return {
      id: index + 1,
      slug,
      title: content?.title ?? title,
      image: `/assets/${fileName}`,
      description:
        content?.description ??
        `Short overview for ${title}. You can replace this text with your final description later.`,
      fullDescription:
        content?.fullDescription ??
        `Detailed description for ${title}. Update this content in lib/initiatives.ts for easy maintenance.`
    };
  });
}

export function getInitiativeBySlug(slug: string) {
  return getInitiatives().find((item) => item.slug === slug);
}
