import { groq } from 'next-sanity';

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    pageBuilder[] {
      ...,
      _type == "caseStudyGrid" => {
        ...,
        studies[]-> {
          _id, title, slug, client, metric, description, tags, image
        }
      }
    }
  }
`;

export const allPagesQuery = groq`
  *[_type == "page" && defined(slug.current)] {
    slug
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    navLinks,
    footerLinks
  }
`;
