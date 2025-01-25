import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { RoughNotation } from 'react-rough-notation';
import { contact, ContactType } from 'config/contact';

function Contact(): React.ReactElement {

  const contactLinks = [
    {
      type: ContactType.email,
      label: 'Email',
      urlLabel: contact.links[ContactType.email],
      url: `mailto:${contact.links[ContactType.email]}`,
    },
    {
      type: ContactType.linkedin,
      label: 'LinkedIn',
      urlLabel: contact.links[ContactType.linkedin],
      url: contact.links[ContactType.linkedin],
    },
    {
      type: ContactType.github,
      label: 'GitHub',
      urlLabel: contact.links[ContactType.github],
      url: contact.links[ContactType.github],
    },
  ];


  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="fade-in divide-y-2 divide-gray-100 dark:divide-gray-800">
        <Header title="Contact" />
        <div className="container py-12">
          <p>
            Do you have a project in mind? Want to hire me? or simply wanna chat? Feel free to reach out to me via:
          </p>
          <ul className="mt-4 space-y-4">
            {contactLinks
              .filter((link) => link.url) // Only render links with valid URLs
              .map((link) => (
                <li key={link.type}>
                  <span className="font-bold">{link.label}:</span>{' '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.urlLabel}
                  </a>
                </li>
              ))}
          </ul>
          <p className="mt-6">
            <RoughNotation
              show
              type="box"
              strokeWidth={2}
              animationDelay={250}
              animationDuration={2000}
              color="#34D399"
            >
              Let's connect and make something amazing together!
            </RoughNotation>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
