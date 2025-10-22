import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Zap, Shield, Globe, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const Section = styled.section`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 220px);
  gap: 1rem;
  perspective: 1000px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 220px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 220px);
  }
`;

const Panel = styled(motion.div)`
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    transform: translateY(-3px);
    background: var(--panel-hover);
    border-color: var(--ring);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(600px 200px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.06), transparent 40%);
    pointer-events: none;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;

const Kicker = styled.span`
  font-size: 0.8rem;
  color: var(--muted);
`;

const Big = styled.div`
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  font-weight: 700;
`;

const Badge = styled.span`
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
`;

const Accent = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  opacity: 0.8;
`;

const Description = styled.p`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.4;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Chip = styled.span`
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: white;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.8rem;
`;

const LinkRow = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const gridItems = [
  { id: 'ai', gridColumn: '1 / 3', gridRow: '1 / 2', icon: <Sparkles size={18} />, title: 'AI Copilot', text: 'Personalized job search assistance', badge: 'New',
    description: 'Chat to refine your resume, tailor cover letters, and prep for interviews.',
    chips: ['Resume critique', 'Cover letters', 'Interview prep', 'Job fit analysis'],
    link: 'Try the Copilot' },
  { id: 'speed', gridColumn: '3 / 5', gridRow: '1 / 2', icon: <Zap size={18} />, title: 'Fast Matches', text: 'Find roles instantly',
    description: 'Recommendations update in real time as your profile evolves.',
    chips: ['Smart filters', 'Real-time alerts', 'One‑click apply'],
    link: 'See matches' },
  { id: 'secure', gridColumn: '1 / 2', gridRow: '2 / 3', icon: <Shield size={18} />, title: 'Secure', text: 'Privacy-first',
    description: 'Your data stays encrypted and never sold.',
    chips: ['End‑to‑end', 'Local redact'],
    link: 'Learn more' },
  { id: 'global', gridColumn: '2 / 5', gridRow: '2 / 4', icon: <Globe size={18} />, title: 'Global', text: 'Opportunities worldwide',
    description: 'Curated roles across time zones and visa options.',
    chips: ['Remote', 'EMEA', 'Americas', 'APAC'],
    link: 'Browse regions' },
  { id: 'infra', gridColumn: '1 / 2', gridRow: '3 / 4', icon: <Cpu size={18} />, title: 'AWS-backed', text: 'Reliable infra',
    description: 'Powered by Lambda, S3, and DynamoDB for scale.',
    chips: ['Lambda', 'S3', 'DynamoDB'] },
];

interface TiltCardProps {
  item: typeof gridItems[0];
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    // Gradient effect
    cardRef.current.style.setProperty('--x', `${mouseX}px`);
    cardRef.current.style.setProperty('--y', `${mouseY}px`);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <Panel
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1 + 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        gridColumn: item.gridColumn,
        gridRow: item.gridRow,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
              <div>
                <Kicker>{item.title}</Kicker>
                <Title>
                  {item.icon}
                  <Big className="gradient-text">{item.text}</Big>
                </Title>
                {item.description && <Description>{item.description}</Description>}
                {item.chips && (
                  <ChipRow>
                    {item.chips.map((c, i) => (
                      <Chip key={i}>{c}</Chip>
                    ))}
                  </ChipRow>
                )}
                {item.link && (
                  <LinkRow href="#">
                    {item.link} <ArrowRight size={14} />
                  </LinkRow>
                )}
              </div>
              <Accent>
                {item.badge && <Badge>{item.badge}</Badge>}
              </Accent>
    </Panel>
  );
};

function BentoGrid() {
  const gridRef = useRef(null);

  return (
    <Section>
      <Container>
        <Grid ref={gridRef}>
          {gridItems.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default BentoGrid;
