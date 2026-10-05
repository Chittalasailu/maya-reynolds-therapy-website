const faqs = [
  {
    q: "Who do you work with?",
    a: "I work with adults, many of them high-achieving professionals, entrepreneurs and creatives, who seem to be coping on the outside but feel anxious, exhausted or on edge underneath.",
  },
  {
    q: "What can therapy help me with?",
    a: "Most of my work focuses on anxiety and panic, trauma, burnout, perfectionism and high internal pressure. We also look at how earlier experiences may still be shaping your relationships, confidence and sense of safety.",
  },
  {
    q: "What approaches do you use?",
    a: "I draw on evidence-based methods, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques. Together they address both the emotional and the physical sides of what you’re feeling.",
  },
  {
    q: "How does trauma therapy with EMDR work?",
    a: "Trauma work is paced carefully. We start by building a sense of safety and stability, and only move into processing past experiences when you feel ready, so you feel more regulated in daily life, not just in session.",
  },
  {
    q: "Do you offer online therapy?",
    a: "Yes. You can meet with me in person at my Santa Monica office, or through secure telehealth sessions if you live anywhere in California.",
  },
  {
    q: "What are sessions like?",
    a: "Warm, collaborative and grounded. Sessions have enough structure to feel supportive, with space for reflection and depth. You’re an active part of the process, and we set goals together.",
  },
];

export default function Faq() {
  return (
    <div className="border-t border-sage-deep/25">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-sage-deep/25">
          <summary className="h4 flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition-colors hover:text-clay [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="text-[28px] font-extralight leading-none text-clay transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="p-body max-w-2xl pb-7">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
