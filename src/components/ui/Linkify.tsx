const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
const PHONE_RE = /\+\d[\d\- ]{7,}\d/g;
const URL_RE = /https?:\/\/[^\s)]*[^\s).,]/g;

/** Renders plain text, auto-linking emails, phone numbers and URLs found within it. */
export function Linkify({ text }: { text: string }) {
  const pattern = new RegExp(`(${EMAIL_RE.source})|(${PHONE_RE.source})|(${URL_RE.source})`, "g");
  const parts = text.split(pattern).filter((part) => part !== undefined && part !== "");

  return (
    <>
      {parts.map((part, i) => {
        if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className="underline underline-offset-2 hover:no-underline">
              {part}
            </a>
          );
        }
        if (/^\+\d[\d\- ]{7,}\d$/.test(part)) {
          return (
            <a key={i} href={`tel:${part}`} className="underline underline-offset-2 hover:no-underline">
              {part}
            </a>
          );
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
