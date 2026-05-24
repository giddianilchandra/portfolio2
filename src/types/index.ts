export type SectionId =
  | 'about'
  | 'skills'
  | 'projects'
  | 'education'
  | 'experience'
  | 'tools'
  | 'cases'
  | 'contact'

export interface MenuItem {
  id: SectionId
  command: string
  label: string
  description: string
  icon: string
  levelReq: number
}

export interface PersonalInfo {
  name: string
  email: string
  github: string
  linkedin: string
  location: string
  currentRole: string
  resumeUrl: string
  taglines: string[]
}

export interface StatusPanel {
  label: string
  value: string
  status: 'ok' | 'warn' | 'err'
  unit?: string
}

export interface BootConfig {
  bootLines: string[]
  statusPanels: StatusPanel[]
}

export interface Metric {
  label: string
  value: number
  suffix: string
  prefix?: string
  description?: string
}

export interface ExperienceMetric {
  label: string
  value: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  duration: string
  highlights: string[]
  techStack: string[]
  metrics: ExperienceMetric[]
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  skills: string[]
  proficiency: number
  color: 'cyan' | 'purple' | 'orange'
}

export interface CiStage {
  name: string
  status: 'pass' | 'fail' | 'pending'
}

export interface TestResults {
  passed: number
  failed: number
  skipped: number
}

export interface Project {
  id: string
  name: string
  tagline: string
  status: 'PASS' | 'FAIL' | 'RUNNING'
  description: string
  techStack: string[]
  testResults: TestResults
  ciStages: CiStage[]
  githubUrl?: string
  highlights: string[]
}

export type DefectPhase = 'Detected' | 'Logs' | 'Analysis' | 'Root Cause' | 'Fix' | 'Deployed'

export interface DefectStep {
  id: number
  phase: DefectPhase
  title: string
  description: string
  codeSnippet?: string
  logLines?: string[]
  statusBadge: string
  statusColor: 'red' | 'yellow' | 'cyan' | 'green'
}

export type BadgeColor = 'cyan' | 'purple' | 'orange'

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  credentialId?: string
  badgeColor: BadgeColor
  skills: string[]
  type: 'certification' | 'education'
}

export interface Tool {
  name: string
  category: string
  proficiency: number
  icon: string
  color: string
}
