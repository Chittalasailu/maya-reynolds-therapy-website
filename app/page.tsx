import Image from "next/image";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { Cell, Photo, Section } from "@/components/Grid";

/*
  Section order and block placement mirror the original template
  (conejovalleycounseling.com/home): every block sits on the same grid lines.
  Added for this project: "Our Office" (after specialties) and FAQs (before the closing CTA).
*/

const audiences = [
  {
    title: "High-Achieving Adults",
    img: "/images/help-professional.jpg",
    alt: "A professional woman resting her head in her hand at her desk, looking tired",
    position: "57% 50%",
    text: "From the outside, you’re handling it all. Inside, it’s overthinking, tension and restless nights. Together we’ll quiet anxiety and panic so calm stops feeling out of reach.",
  },
  {
    title: "Entrepreneurs & Creatives",
    img: "/images/help-creative.jpg",
    alt: "Hands holding a freshly shaped clay pot in a pottery studio",
    text: "Years of pushing through stress can leave you disconnected from yourself. Therapy gives you room to ease perfectionism and build a pace of life and work you can sustain.",
  },
  {
    title: "Adults Healing from the Past",
    img: "/images/help-journaling.jpg",
    alt: "A woman writing in a notebook, reflecting quietly",
    text: "Earlier experiences can keep shaping your relationships, confidence and sense of safety. Whether it was one event or years of chronic stress, we’ll move at a pace that feels safe.",
  },
];

const expertise = [
  "Anxiety",
  "Panic attacks",
  "Single-incident trauma",
  "Complex trauma",
  "Burnout",
  "Perfectionism",
  "Chronic stress",
  "Overthinking",
  "Sleep difficulties",
  "Relationship patterns",
  "Confidence & self-worth",
  "…and more.",
];

const specialties = [
  {
    title: "Anxiety & Panic Therapy",
    text: "When worry never switches off and your body stays on high alert, everything feels harder. With CBT, mindfulness and body-oriented tools, we’ll calm the cycle of anxiety and panic, and help you feel at home in your body again.",
    link: { href: "#faqs", label: "Common questions" },
    m: ["6/2/13/10", "13/2/15/10"],
    d: ["4/11/11/18", "11/11/13/18"],
  },
  {
    title: "Burnout & Perfectionism",
    text: "If you’ve spent years pushing through, you may feel driven yet disconnected. We’ll ease the internal pressure, reconnect you with what matters, and build ways of living and working you can actually keep up.",
    link: { href: "#faqs", label: "Common questions" },
    m: ["16/2/23/10", "23/2/25/10"],
    d: ["15/11/22/18", "22/11/24/18"],
  },
  {
    title: "Trauma Therapy & EMDR",
    text: "From a single painful event to long-standing patterns rooted in childhood or relationships, trauma work here is paced with care. EMDR and other evidence-based methods help you process the past while staying grounded.",
    link: { href: "#faqs", label: "Common questions" },
    m: ["26/2/33/10", "33/2/35/10"],
    d: ["4/19/11/26", "11/19/13/26"],
  },
  {
    title: "Not sure where to begin?",
    text: "You don’t need to have it all figured out before reaching out. Many clients start simply knowing something has to change. We’ll talk through what you’re looking for and whether we’re a good fit.",
    link: { href: "#contact", label: "Plan your first session" },
    m: ["36/2/42/10", "42/2/44/10"],
    d: ["15/19/22/26", "22/19/24/26"],
  },
];

const officeFacts = [
  { h: "Quiet & private", p: "A confidential room where you can speak freely, away from the noise of the day." },
  { h: "Calm & grounding", p: "Natural light, soft textures and an uncluttered space designed to help you exhale." },
  { h: "In person or online", p: "Meet in Santa Monica, or join secure telehealth sessions from anywhere in California." },
];

const ADDRESS = "123th Street 45 W, Santa Monica, CA 90401";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* HERO */}
        <Section id="top" rows={[24, 18]} className="bg-cream !pt-[117px] md:!pt-[115px]">
          <Cell m="2/2/5/10" d="2/12/4/20">
            <p className="caps">In-person therapy in Santa Monica &amp; online across California</p>
          </Cell>
          <Cell m="5/2/12/10" d="7/12/15/24">
            <h1 className="h1">
              Anxiety, trauma &amp; burnout therapy in Santa Monica, so you can finally <span className="accent">exhale</span>.
            </h1>
            <p className="p-body mt-4">
              Dr. Maya Reynolds, PsyD, helps high-achieving adults feel calmer, steadier and more like themselves.
            </p>
          </Cell>
          <Cell m="12/2/14/10" d="15/12/17/24">
            <a href="#contact" className="link-line">
              Plan your first session
            </a>
          </Cell>
          <Photo
            m="15/1/24/8"
            d="2/1/17/10"
            src="/images/hero-tea-window.jpg"
            alt="A woman holding a cup of tea by a sunlit window, taking a quiet moment for herself"
            sizes="(min-width:768px) 35vw, 75vw"
            position="50% 30%"
            priority
          />
          <Photo
            m="18/9/24/11"
            d="7/25/17/27"
            src="/images/texture-linen.jpg"
            alt=""
            sizes="(min-width:768px) 9vw, 20vw"
          />
        </Section>

        {/* INTRO */}
        <Section rows={[28, 17]} pad={[59, 7]} gap={20} className="bg-cream">
          <Cell m="1/2/5/10" d="4/3/8/16">
            <h2 className="h2">You look fine on the outside. Inside, you’re running on empty.</h2>
          </Cell>
          <Cell m="5/2/13/10" d="9/3/16/10">
            <p className="caps">In my Santa Monica practice, you don’t have to hold it all together.</p>
            <p className="p-body mt-4">
              Maybe you’re the one everyone relies on: capable, thoughtful and self-aware. Underneath, there’s constant
              worry, a body that never quite relaxes, and a sense that you’re always bracing for something to go wrong.
            </p>
          </Cell>
          <Photo
            m="14/2/21/10"
            d="1/19/17/27"
            src="/images/intro-window.jpg"
            alt="A woman sitting by a window surrounded by plants, lost in thought"
            sizes="(min-width:768px) 31vw, 90vw"
          />
          <Cell m="22/2/29/10" d="9/10/17/17">
            <p className="p-body">
              As a licensed clinical psychologist, I help adults across Santa Monica and California work through
              anxiety, panic, trauma and burnout. Together, we’ll make sense of what’s happening in both your mind and
              your body, so you can feel more settled in daily life, not just during our sessions.
            </p>
          </Cell>
        </Section>

        {/* WHO I HELP */}
        <Section id="who-i-help" rows={[53, 21]} pad={[56, 6.6]} gap={20} className="bg-paper">
          <Cell m="1/2/3/10" d="1/2/3/10">
            <h2 className="h2">
              Who I <span className="accent">help</span>
            </h2>
          </Cell>
          {audiences.map((a, i) => {
            const col = [5, 12, 19][i];
            const mRow = [4, 21, 38][i];
            return [
              <Photo
                key={a.img}
                m={`${mRow}/2/${mRow + 9}/10`}
                d={`4/${col}/15/${col + 7}`}
                src={a.img}
                alt={a.alt}
                sizes="(min-width:768px) 26vw, 90vw"
                position={a.position}
              />,
              <Cell key={a.title} m={`${mRow + 10}/2/${mRow + 16}/10`} d={`16/${col}/${i === 0 ? 21 : 22}/${col + 7}`}>
                <h3 className="h4">{a.title}</h3>
                <p className="p-body mt-3">{a.text}</p>
              </Cell>,
            ];
          })}
        </Section>

        {/* STATEMENT BAND */}
        <Section
          rows={[2, 10]}
          pad={[56, 6.6]}
          className="bg-sage-deep"
          background={
            <>
              <Image src="/images/band-sunset-palms.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
              <div className="absolute inset-0 -z-10 bg-sage-deep/60" />
            </>
          }
        >
          <Cell m="1/2/3/10" d="5/3/11/19">
            <p className="h2 !text-cream">
              You deserve to feel respected, understood and part of every step.{" "}
              <em className="italic">This is a space to slow down and reconnect with yourself.</em>
            </p>
          </Cell>
        </Section>

        {/* AREAS OF EXPERTISE */}
        <Section rows={[27, 12]} pad={[68, 8]} className="bg-paper">
          <Cell m="1/2/3/10" d="1/3/4/9">
            <h2 className="h3">
              Areas of <span className="accent">expertise</span>
            </h2>
          </Cell>
          {expertise.map((e, k) => {
            const col = k < 6 ? 10 : 18;
            const r = 1 + 2 * (k % 6);
            return [
              <Cell key={e} m={`${4 + 2 * k}/2/${6 + 2 * k}/10`} d={`${r}/${col}/${r + 2}/${col + 8}`}>
                <p className="caps">{e}</p>
              </Cell>,
              k < 10 && (
                <Cell
                  key={`${e}-rule`}
                  m={`${5 + 2 * k}/2/${6 + 2 * k}/10`}
                  d={`${r + 1}/${col}/${r + 2}/${col + 7}`}
                  className={`self-center ${k === 5 ? "md:hidden" : ""}`}
                >
                  <hr className="border-sage-deep/25" />
                </Cell>
              ),
            ];
          })}
        </Section>

        {/* HOW I WORK / ABOUT */}
        <Section id="about" rows={[41, 24]} gap={20} className="bg-sand">
          <Cell m="3/2/5/10" d="4/3/6/15">
            <p className="caps">Licensed clinical psychologist · Santa Monica, CA</p>
          </Cell>
          <Cell m="5/2/8/9" d="8/3/10/20">
            <h2 className="h2">Meet Dr. Maya Reynolds, PsyD.</h2>
          </Cell>
          <Photo
            m="9/2/17/10"
            d="4/21/22/27"
            src="/images/maya.jpg"
            alt="Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
            sizes="(min-width:768px) 23vw, 90vw"
            position="50% 15%"
          />
          <Cell m="18/2/28/10" d="11/3/20/11">
            <p className="caps">I believe therapy should feel both supportive and real.</p>
            <p className="p-body mt-4">
              My approach is warm, collaborative and grounded. Sessions have enough structure to feel steady, with room
              for reflection and depth. I draw on CBT, EMDR, mindfulness and body-oriented techniques to help you
              understand both the emotional and physical sides of what you’re feeling.
            </p>
          </Cell>
          <Cell m="28/2/38/10" d="11/11/20/19">
            <p className="p-body">
              Many of my clients are entrepreneurs, creatives and professionals living fast-paced lives. My goal isn’t
              only to ease symptoms; it’s to help you build insight, resilience and a kinder relationship with yourself
              that lasts. I see clients in person in Santa Monica and through secure telehealth across California.
            </p>
          </Cell>
          <Cell m="38/2/40/10" d="21/3/23/19">
            <a href="#specialties" className="link-line">
              Explore my specialties
            </a>
          </Cell>
        </Section>

        {/* BANNER + HEADING */}
        <Section rows={[13, 14]} pad={[56, 6.6]} className="bg-paper">
          <Photo
            m="1/2/10/11"
            d="1/1/15/15"
            src="/images/session-conversation.jpg"
            alt="Two women in a calm, open conversation during a therapy session"
            sizes="(min-width:768px) 54vw, 95vw"
          />
          <Cell m="10/2/14/10" d="9/16/15/26">
            <h2 className="h2">
              Understanding your past <span className="accent">&amp;</span> building a calmer way forward.
            </h2>
          </Cell>
        </Section>

        {/* SPECIALTIES */}
        <Section id="specialties" rows={[44, 25]} className="bg-paper">
          <Cell m="3/2/5/10" d="3/3/7/10">
            <h2 className="h3">
              My <span className="accent">specialties</span> include…
            </h2>
          </Cell>
          {specialties.map((s) => [
            <Cell key={s.title} m={s.m[0]} d={s.d[0]}>
              <h3 className="h4">{s.title}</h3>
              <p className="p-body mt-3">{s.text}</p>
            </Cell>,
            <Cell key={`${s.title}-link`} m={s.m[1]} d={s.d[1]}>
              <a href={s.link.href} className="link-line">
                {s.link.label}
              </a>
            </Cell>,
          ])}
        </Section>

        {/* OUR OFFICE (new section) */}
        <Section id="office" rows={[47, 31]} pad={[56, 6.6]} className="bg-cream">
          <Cell m="1/2/3/10" d="2/3/4/12">
            <p className="caps">Our office · Santa Monica, CA</p>
          </Cell>
          <Cell m="3/2/6/10" d="4/3/8/13">
            <h2 className="h2">
              A calm space for <span className="accent">healing</span>
            </h2>
          </Cell>
          <Cell m="6/2/12/10" d="2/15/8/26">
            <p className="p-body">
              My Santa Monica office is quiet, private and filled with natural light. It’s simple and uncluttered, with
              comfortable seating and a grounding feel, so you can settle in the moment you arrive. Many clients tell me
              the space itself helps them feel at ease.
            </p>
          </Cell>
          <Photo
            m="13/2/22/10"
            d="9/3/22/15"
            src="/images/office-1.jpg"
            alt="Dr. Reynolds' sunlit therapy room with exposed brick, tall windows, a grey sofa and an armchair"
            sizes="(min-width:768px) 45vw, 90vw"
          />
          <Photo
            m="23/2/31/8"
            d="11/16/22/23"
            src="/images/office-2.jpg"
            alt="A calm counseling room with an olive tree, a bookshelf and a low glass table"
            sizes="(min-width:768px) 27vw, 65vw"
          />
          <Photo
            m="26/8/31/11"
            d="9/24/18/27"
            src="/images/detail-shelf.jpg"
            alt="Bookshelf with books, plants and framed photos in the therapy office"
            sizes="(min-width:768px) 12vw, 25vw"
            position="30% 50%"
          />
          {officeFacts.map((f, i) => (
            <Cell key={f.h} m={`${32 + 4 * i}/2/${36 + 4 * i}/10`} d={`24/${3 + 8 * i}/28/${10 + 8 * i}`} className="border-t border-sage-deep/25 pt-5">
              <h3 className="h4">{f.h}</h3>
              <p className="p-body mt-2">{f.p}</p>
            </Cell>
          ))}
          <Cell m="44/2/46/10" d="29/3/31/18">
            <p className="caps !text-clay">
              <span className="sr-only">Address: </span>
              {ADDRESS}
            </p>
          </Cell>
          <Cell m="46/2/48/10" d="29/19/31/26">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="link-line">
              Get directions
            </a>
          </Cell>
        </Section>

        {/* FAQS */}
        <Section id="faqs" rows={[20, 14]} pad={[56, 6.6]} className="bg-paper">
          <Cell m="1/2/3/10" d="3/3/7/10">
            <h2 className="h3">
              Frequently asked <span className="accent">questions</span>
            </h2>
          </Cell>
          <Cell m="4/2/20/10" d="3/11/14/26">
            <Faq />
          </Cell>
        </Section>

        {/* CTA */}
        <Section id="contact" rows={[31, 16]} pad={[56, 6.6]} className="bg-cream">
          <Photo
            m="1/1/7/6"
            d="4/1/16/4"
            src="/images/cta-mug.jpg"
            alt="Hands wrapped around a warm cup of coffee"
            sizes="(min-width:768px) 12vw, 45vw"
          />
          <Cell m="8/2/10/10" d="1/6/3/16">
            <p className="caps">Your first session</p>
          </Cell>
          <Cell m="10/2/13/10" d="4/6/8/16">
            <h2 className="h2">
              Ready to feel more like <span className="accent">yourself</span>?
            </h2>
          </Cell>
          <Cell m="13/2/21/10" d="8/6/14/16">
            <p className="p-body">
              Reaching out can feel like a big step, especially when you’re used to carrying everything on your own. If
              you want a therapist who blends practical tools with deeper work, and who understands the pace of your
              life, I may be a good fit.
            </p>
            <p className="p-body mt-4">
              Sessions are available in person at my Santa Monica office or online anywhere in California.
            </p>
          </Cell>
          <Cell m="21/2/23/10" d="14/6/16/16">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">
              Get directions
            </a>
          </Cell>
          <Photo
            m="24/3/32/11"
            d="1/18/16/27"
            src="/images/cta-beach-walk.jpg"
            alt="A woman standing calmly on the beach at sunset"
            sizes="(min-width:768px) 35vw, 80vw"
          />
        </Section>
      </main>

      {/* FOOTER */}
      <footer>
        <Section rows={[29, 9]} pad={[38, 4.5]} className="bg-paper">
          <Cell m="2/2/5/10" d="1/2/4/9">
            <p className="font-serif text-[36px] font-light leading-none text-sage-deep">Maya Reynolds</p>
            <p className="mt-2 text-[10.5px] font-normal uppercase tracking-[0.3em] text-clay">PsyD · Licensed Clinical Psychologist</p>
          </Cell>
          <Cell m="5/2/10/10" d="4/2/9/10">
            <p className="p-body">
              Anxiety, trauma and burnout therapy for adults, in person in Santa Monica or online anywhere in
              California.
            </p>
          </Cell>
          <Cell m="10/3/15/9" d="1/12/6/16">
            <nav aria-label="Footer">
              <p className="caps">Navigate</p>
              <ul className="p-body mt-2">
                {[
                  ["#top", "Home"],
                  ["#about", "About"],
                  ["#office", "Our Office"],
                  ["#faqs", "FAQs"],
                ].map(([h, l]) => (
                  <li key={h}>
                    <a href={h} className="transition-colors hover:text-clay">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Cell>
          <Cell m="15/3/23/9" d="1/16/8/21">
            <p className="caps">Services</p>
            <ul className="p-body mt-2">
              <li>Anxiety &amp; Panic Therapy</li>
              <li>Trauma Therapy &amp; EMDR</li>
              <li>Burnout &amp; Perfectionism</li>
              <li>Telehealth in California</li>
            </ul>
          </Cell>
          <Cell m="23/3/30/9" d="1/21/10/26">
            <p className="caps">Visit</p>
            <address className="p-body mt-2 not-italic">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </address>
            <p className="p-body mt-3 italic">In-person sessions in Santa Monica &amp; secure telehealth across California</p>
          </Cell>
        </Section>
        <Section rows={[2, 1]} pad={[4, 0.5]} className="bg-sage-deep">
          <Cell m="1/2/3/10" d="1/2/2/26" className="flex items-center">
            <p className="text-[12px] text-cream/80">© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · Santa Monica, California</p>
          </Cell>
        </Section>
      </footer>
    </>
  );
}
