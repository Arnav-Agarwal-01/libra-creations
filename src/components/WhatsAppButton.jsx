import { whatsappLink } from "@/lib/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Libra Creations, I would like to discuss a corporate requirement.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Libra Creations on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#167b52] px-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(10,34,51,0.2)] transition-colors hover:bg-[#106542] sm:right-6"
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C9.37 3 4 8.37 4 15c0 2.13.56 4.13 1.53 5.87L4 29l8.32-1.5A11.93 11.93 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.8c-1.8 0-3.5-.5-4.98-1.36l-.36-.21-4.95.9.93-4.83-.23-.37A9.76 9.76 0 0 1 5.2 15c0-5.96 4.84-10.8 10.8-10.8S26.8 9.04 26.8 15 21.96 24.8 16 24.8zm6.1-7.93c-.33-.17-1.97-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.05 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.64-.98-.88-1.64-1.96-1.83-2.29-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.2.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57l-.64-.01c-.22 0-.58.08-.88.42-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.17.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.63-.39z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
