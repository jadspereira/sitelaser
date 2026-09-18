import { WHATSAPP_URL } from "./data";

const INSTAGRAM_URL = "https://www.instagram.com/";

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.33-1.93 1.4-.49.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.61-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.61-.14.24.09 1.55.73 1.82.86.26.14.44.2.5.32.07.12.07.68-.17 1.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="#FFFFFF" stroke="none" />
    </svg>
  );
}

function FloatingButton({
  href,
  ariaLabel,
  tooltip,
  colorClass,
  icon,
}: {
  href: string;
  ariaLabel: string;
  tooltip: string;
  colorClass: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`social-fab ${colorClass} group relative flex items-center justify-center w-14 h-14 rounded-full motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1A]`}
    >
      {icon}
      <span
        role="tooltip"
        className="hidden md:block pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-[#1C1C1A] text-white text-[0.75rem] font-medium px-2.5 py-1.5 opacity-0 translate-x-1 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
      >
        {tooltip}
      </span>
    </a>
  );
}

export function SocialFloatingButtons() {
  return (
    <div
      className="fixed right-5 md:right-8 z-40 flex flex-col gap-[11px]"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <FloatingButton
        href={WHATSAPP_URL}
        ariaLabel="Agendar avaliação pelo WhatsApp"
        tooltip="WhatsApp"
        colorClass="social-fab-whatsapp"
        icon={<WhatsAppIcon />}
      />
      <FloatingButton
        href={INSTAGRAM_URL}
        ariaLabel="Conhecer o Instagram da Clínica Alva"
        tooltip="Instagram"
        colorClass="social-fab-instagram"
        icon={<InstagramIcon />}
      />
    </div>
  );
}
