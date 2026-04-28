import { Github, Hexagon, Linkedin, Mail } from "lucide-react";

const DlFooter = () => {
  return (
    <footer className="pb-24 pt-16 md:pb-8 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="md:flex md:items-start md:justify-between">
          <a href="#home" className="flex items-center gap-x-2" aria-label="Dante Lugo">
            <Hexagon className="h-10 w-10 text-v1-primary-500" />
            <span className="font-display text-3xl leading-none">Dante Lugo</span>
          </a>

          <ul className="mt-6 flex list-none space-x-3 md:mt-0">
            {[
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: "https://www.linkedin.com/in/dantelugo/",
                label: "LinkedIn",
              },
              {
                icon: <Github className="h-5 w-5" />,
                href: "https://github.com/dantel8",
                label: "GitHub",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: "mailto:dantelugo050602@gmail.com",
                label: "Email",
              },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-v1-primary-500 text-white transition hover:bg-v1-primary-600"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-black/5 pt-6 dark:border-white/10 lg:grid lg:grid-cols-10">
          <nav className="lg:col-[4/11]">
            <ul className="flex list-none flex-wrap -mx-2 -my-1 lg:justify-end">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label} className="mx-2 my-1 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-v1-primary-500 underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 lg:col-[4/11] lg:mt-0">
            <ul className="flex list-none flex-wrap -mx-3 -my-1 lg:justify-end">
              {[
                {
                  href: "mailto:dantelugo050602@gmail.com",
                  label: "dantelugo050602@gmail.com",
                },
                { href: "#home", label: "Buenos Aires, Argentina" },
              ].map((link) => (
                <li key={link.label} className="mx-3 my-1 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 whitespace-nowrap text-sm leading-6 text-neutral-500 dark:text-neutral-400 lg:col-[1/4] lg:row-[1/3] lg:mt-0">
            <div>&copy; {new Date().getFullYear()} Dante Lugo</div>
            <div>Frontend portfolio</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DlFooter;
