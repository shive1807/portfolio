'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CombatNode {
  id: number
  label: string
  desc: string
  code: string
}

const nodes: CombatNode[] = [
  {
    id: 1,
    label: 'INPUT',
    desc: 'Player presses attack button — mapped via UInputComponent.',
    code: `// UInputComponent
PlayerInputComponent->BindAction(
  "Attack", IE_Pressed,
  this, &ACharacter::StartAttack
);`,
  },
  {
    id: 2,
    label: 'COMBAT COMPONENT',
    desc: 'Validates attack state and triggers ability. Prevents chaining when already attacking.',
    code: `void UCombatComponent::StartAttack() {
  if (!bCanAttack) return;
  CurrentAttackIndex++;
  ExecuteAttack(CurrentAttackIndex);
}`,
  },
  {
    id: 3,
    label: 'ATTACK STATE',
    desc: 'Sets combat state to Attacking, blocks movement and other inputs.',
    code: `void ACharacter::ExecuteAttack(int32 Index) {
  CombatState = ECombatState::Attacking;
  PlayAttackMontage(Index);
}`,
  },
  {
    id: 4,
    label: 'ANIMATION MONTAGE',
    desc: 'Plays the correct attack montage via UAnimInstance.',
    code: `UAnimMontage* AttackMontage = AttackMontages[Index];
AnimInstance->Montage_Play(
  AttackMontage, 1.0f
);`,
  },
  {
    id: 5,
    label: 'ANIMATION NOTIFY',
    desc: 'Fires at the exact frame when the weapon should deal damage.',
    code: `void UAN_HitDetect::Notify(
  USkeletalMeshComponent* Mesh,
  UAnimSequenceBase* Animation
) {
  Character->EnableHitTrace();
}`,
  },
  {
    id: 6,
    label: 'SPHERE TRACE',
    desc: 'Sphere trace along weapon socket path detects colliding actors.',
    code: `bool UCombatComponent::DoSphereTrace(
  FHitResult& HitResult
) {
  return UKismetSystemLibrary::SphereTraceSingle(
    this, Start, End, Radius,
    TraceType, false, Ignore,
    DrawType, HitResult, true
  );
}`,
  },
  {
    id: 7,
    label: 'COMBAT TARGET',
    desc: 'Enemy receives the hit and delegates to health component.',
    code: `void ACombatTarget::HandleHit(
  float Damage,
  AActor* Attacker
) {
  HealthComponent->TakeDamage(Damage);
  PlayHitReaction();
}`,
  },
  {
    id: 8,
    label: 'HEALTH COMPONENT',
    desc: 'Manages health state. Triggers death if health reaches zero.',
    code: `void UHealthComponent::TakeDamage(
  float Amount
) {
  CurrentHealth -= Amount;
  if (CurrentHealth <= 0)
    HandleDeath();
}`,
  },
  {
    id: 9,
    label: 'DEATH',
    desc: 'Plays death montage, sets dead state, schedules cleanup.',
    code: `void ACombatTarget::HandleDeath() {
  CombatState = ECombatState::Dead;
  PlayDeathMontage();
  SetLifeSpan(3.0f);
}`,
  },
]

export default function CombatSystem() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  const selected = nodes[active]

  return (
    <section
      id="systems"
      ref={sectionRef}
      style={{ padding: '8rem 0', background: 'var(--surface)', opacity: 0 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
            ENGINEERING SHOWCASE
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: '0 0 0.5rem 0',
            }}
          >
            AGIES COMBAT
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.76rem',
              letterSpacing: '0.35em',
              color: 'var(--muted)',
              margin: 0,
            }}
          >
            GAMEPLAY ENGINEERING PORTFOLIO PROJECT
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: flow diagram */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.86rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Click any node to inspect the implementation. This diagram traces the full attack
              pipeline — from player input to enemy death.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {nodes.map((node, i) => (
                <div key={node.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <button
                    onClick={() => setActive(i)}
                    className={`combat-node${active === i ? ' active' : ''}`}
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.75rem 1.25rem',
                      background: 'transparent',
                      color: active === i ? 'var(--accent)' : 'var(--muted)',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.3em',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    <span style={{ color: 'rgba(107,107,107,0.5)', marginRight: '0.75rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {node.label}
                  </button>
                  {i < nodes.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        height: '12px',
                        background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                        marginLeft: '1.5rem',
                        transition: 'background 0.2s',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: code panel */}
          <div
            style={{
              position: 'sticky',
              top: '6rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#0a0a0a',
              padding: '2rem',
            }}
          >
            <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.66rem',
                  letterSpacing: '0.4em',
                  color: 'var(--accent)',
                }}
              >
                {selected.label}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  marginTop: '0.5rem',
                  lineHeight: 1.6,
                }}
              >
                {selected.desc}
              </p>
            </div>
            <pre
              style={{
                fontFamily: '"Menlo", "SF Mono", "Courier New", monospace',
                fontSize: '0.86rem',
                lineHeight: 1.9,
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                overflowX: 'auto',
              }}
              dangerouslySetInnerHTML={{
                __html: selected.code
                  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                  .replace(/(\/\/[^\n]*)/g, '<span style="color:rgba(107,107,107,0.7)">$1</span>')
                  .replace(/\b(void|bool|if|return|this|true|false|int32|float)\b/g, '<span style="color:#a78bfa">$1</span>')
                  .replace(/\b(UInputComponent|UCombatComponent|ACharacter|UAnimMontage|UAN_HitDetect|USkeletalMeshComponent|UAnimSequenceBase|UCombatTarget|UHealthComponent|ACombatTarget|UKismetSystemLibrary)\b/g, '<span style="color:#60a5fa">$1</span>')
                  .replace(/(".*?")/g, '<span style="color:#86efac">$1</span>')
                  .replace(/\b(\d+\.\d+f|\d+)\b/g, '<span style="color:#fb923c">$1</span>')
                  .replace(/([A-Z][a-zA-Z]+(?:::[A-Z][a-zA-Z]+)+)/g, '<span style="color:var(--accent)">$1</span>'),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
