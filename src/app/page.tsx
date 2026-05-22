'use client'

import { Hero } from '@/components/sections/Hero'
import { ExperienceChronicle } from '@/components/sections/ExperienceChronicle'
import { SkillsCodex } from '@/components/sections/SkillsCodex'
import { MissionBriefings } from '@/components/sections/MissionBriefings'
import { AchievementsVault } from '@/components/sections/AchievementsVault'
import { QuestComplete } from '@/components/sections/QuestComplete'

export default function HomePage() {
  return (
    <main className="relative bg-background text-text-primary">
      <Hero />
      <ExperienceChronicle />
      <SkillsCodex />
      <MissionBriefings />
      <AchievementsVault />
      <QuestComplete />
    </main>
  )
}
