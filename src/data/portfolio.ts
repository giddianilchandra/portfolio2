import type {
  PersonalInfo,
  BootConfig,
  Metric,
  Experience,
  SkillCategory,
  Project,
  DefectStep,
  Certification,
} from '@/types'

// ─── PERSONAL INFO ─────────────────────────────────────────────────────────────
// Replace {{FULL_NAME}}, {{EMAIL}}, {{PHONE}}, {{LINKEDIN}}, {{GITHUB}} with your real details

export const personalInfo: PersonalInfo = {
  name: 'Anil Chandra Giddi',
  email: 'giddianilchandra@gmail.com',
  github: 'https://github.com/giddianilchandra',
  linkedin: 'https://www.linkedin.com/in/anilchandra-giddi/',
  location: 'Hyderabad, India',
  currentRole: 'Software Development Engineer in Testing (SDET)',
  resumeUrl: '/resume.pdf',
  taglines: [
    'SDET | 6.8 Years Experience',
    'Test Automation Engineer',
    'Playwright & Selenium Expert',
    'CI/CD Quality Gate Engineer',
    'AI-Augmented QA Engineer',
  ],
}

// ─── BOOT SEQUENCE ─────────────────────────────────────────────────────────────

export const bootConfig: BootConfig = {
  bootLines: [
    '> INITIALIZING QUALITY ASSURANCE CORE...',
    '> LOADING SELENIUM-JAVA FRAMEWORK.............. [OK]',
    '> MOUNTING PLAYWRIGHT-TYPESCRIPT ENGINE........ [OK]',
    '> SYNCING AZURE DEVOPS PIPELINES............... [OK]',
    '> CONNECTING TO REST-ASSURED API SUITE......... [OK]',
    '> RUNNING SYSTEM DIAGNOSTICS................... [OK]',
    '> 6.8 YEARS OF AUTOMATION EXPERTISE LOADED',
    '> ALL SYSTEMS OPERATIONAL',
  ],
  statusPanels: [
    { label: 'Automation Coverage', value: '90%+', status: 'ok', unit: 'coverage' },
    { label: 'Build Pipeline', value: 'PASSING', status: 'ok', unit: 'Azure DevOps' },
    { label: 'Framework Status', value: 'NOMINAL', status: 'ok', unit: 'Playwright + Selenium' },
  ],
}

// ─── METRICS ───────────────────────────────────────────────────────────────────

export const metrics: Metric[] = [
  { label: 'Years Experience', value: 6, suffix: '.8', description: 'in software testing & automation' },
  { label: 'Test Cases Automated', value: 1200, suffix: '+', description: 'across all projects' },
  { label: 'Automation Coverage', value: 90, suffix: '%', description: 'average achieved' },
  { label: 'Defects Detected', value: 500, suffix: '+', description: 'pre-production defects caught' },
]

// ─── EXPERIENCE ────────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'M3BI — A Zensar Company',
    role: 'Software Engineer',
    period: 'Jan 2023 — Present',
    duration: '3.5 years',
    highlights: [
      'Developed and maintained automated test scripts using Playwright and TypeScript for complex enterprise applications',
      'Automated UI and API testing to ensure high-quality, defect-free application releases',
      'Integrated test execution into Azure DevOps CI/CD pipelines for continuous quality validation',
      'Collaborated closely with developers to identify defects early and improve overall testing efficiency',
    ],
    techStack: ['Playwright', 'TypeScript', 'Azure DevOps', 'Azure Pipelines', 'Azure Boards'],
    metrics: [
      { label: 'Tool', value: 'Playwright + TS' },
      { label: 'Pipeline', value: 'Azure DevOps' },
      { label: 'Domain', value: 'Tax application' },
    ],
  },
  {
    id: 'exp-2',
    company: 'Signant Health',
    role: 'Test Automation Engineer',
    period: 'Nov 2021 — Dec 2022',
    duration: '1.1 years',
    highlights: [
      'Designed and executed Selenium-based automation scripts for clinical trial web applications',
      'Developed and maintained TestNG framework for structured, data-driven test execution',
      'Conducted comprehensive API testing using Rest-Assured, validating clinical data endpoints',
      'Automated test reporting for traceability across regulatory compliance requirements',
    ],
    techStack: ['Selenium WebDriver', 'Java', 'TestNG', 'Rest-Assured', 'Postman', 'Jenkins', 'JIRA'],
    metrics: [
      { label: 'Framework', value: 'Selenium + TestNG' },
      { label: 'Domain', value: 'Healthcare / Clinical' },
      { label: 'CI Tool', value: 'Jenkins' },
    ],
  },
  {
    id: 'exp-3',
    company: 'Lincesoft Solutions Pvt Ltd',
    role: 'SDET',
    period: 'Sep 2019 — Oct 2021',
    duration: '2.1 years',
    highlights: [
      'Built automation frameworks for functional, regression, and UI testing from scratch',
      'Implemented Selenium WebDriver with TestNG, establishing POM and Hybrid framework patterns',
      'Conducted cross-browser testing across Chrome, Firefox, Edge, and Safari',
      'Performed database validations using MySQL to verify data integrity end-to-end',
    ],
    techStack: ['Selenium WebDriver', 'Java', 'TestNG', 'Cucumber', 'MySQL', 'GitHub'],
    metrics: [
      { label: 'Framework', value: 'Hybrid + POM' },
      { label: 'DB Testing', value: 'MySQL' },
      { label: 'Methodology', value: 'Agile / Scrum' },
    ],
  },
]

// ─── SKILLS ────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: 'ui-automation',
    name: 'UI Automation',
    icon: '⬡',
    skills: ['Selenium WebDriver', 'Playwright', 'TestNG', 'Cucumber', 'POM'],
    proficiency: 95,
    color: 'cyan',
  },
  {
    id: 'api-testing',
    name: 'API Testing',
    icon: '⬡',
    skills: ['Rest-Assured', 'Postman', 'API Automation', 'Rest API Validation'],
    proficiency: 90,
    color: 'purple',
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: '⬡',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
    proficiency: 88,
    color: 'cyan',
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: '⬡',
    skills: ['Azure DevOps', 'Azure Pipelines', 'GitHub Actions', 'GitHub'],
    proficiency: 85,
    color: 'purple',
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    icon: '⬡',
    skills: ['Hybrid Framework', 'BDD Cucumber', 'TDD', 'Page Object Model', 'Data-Driven'],
    proficiency: 92,
    color: 'cyan',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    icon: '⬡',
    skills: ['Claude Code', 'GitHub Copilot', 'MCP Servers', 'LLM Agents'],
    proficiency: 80,
    color: 'purple',
  },
  {
    id: 'test-management',
    name: 'Test Management',
    icon: '⬡',
    skills: ['JIRA', 'Azure Boards'],
    proficiency: 90,
    color: 'cyan',
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: '⬡',
    skills: ['MySQL'],
    proficiency: 75,
    color: 'purple',
  },
]

// ─── PROJECTS ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'VialtoDirect',
    tagline: 'TAX, Immigration & Consulting platform — end-to-end automation',
    status: 'PASS',
    description:
      'VialtoDirect is a comprehensive platform for TAX, Immigration, and Consulting services across multiple countries. The application handles employee tax filing, KYC verification, secure payments, and admin-managed tax plans. Automated full regression, UI flows, API contracts, and data validation across the entire compliance lifecycle.',
    techStack: ['Playwright', 'TypeScript', 'Rest-Assured', 'Azure DevOps', 'Azure Pipelines', 'Postman'],
    testResults: { passed: 1284, failed: 6, skipped: 22 },
    ciStages: [
      { name: 'Build', status: 'pass' },
      { name: 'UI Tests', status: 'pass' },
      { name: 'API Tests', status: 'pass' },
      { name: 'Deploy', status: 'pass' },
    ],
    highlights: [
      'Automated full UI regression covering KYC, payments, and tax filing workflows',
      'API automation validating secure payment gateway and immigration compliance endpoints',
      'Integrated with Azure Pipelines — tests trigger on every PR and merge to main',
    ],
  },
  {
    id: 'proj-2',
    name: 'Remote Work application',
    tagline: 'Cross-country remote work request & approval automation',
    status: 'PASS',
    description:
      'Application managing remote work requests for employees seeking to work in different countries or states. Covers relocation requests, manager approvals, and compliance checks across taxability, social security, and immigration policies. Automated complex multi-role approval workflows and regulatory validation flows.',
    techStack: ['Selenium WebDriver', 'Java', 'TestNG', 'Rest-Assured', 'Jenkins', 'JIRA'],
    testResults: { passed: 876, failed: 4, skipped: 15 },
    ciStages: [
      { name: 'Build', status: 'pass' },
      { name: 'Regression', status: 'pass' },
      { name: 'API Suite', status: 'pass' },
      { name: 'Report', status: 'pass' },
    ],
    highlights: [
      'Automated end-to-end approval workflows covering employee, manager, and admin roles',
      'Validated taxability and immigration policy logic across 10+ country configurations',
      'Reduced regression cycle time significantly with parallel TestNG execution',
    ],
  },
  {
    id: 'proj-3',
    name: 'Smart Supplies',
    tagline: 'Pharmaceutical drug logistics & supply chain testing',
    status: 'PASS',
    description:
      'Smart Supplies is a logistics management system tracking creation and distribution of medicinal drugs. The platform monitors drug lot production, manages inventory, and tracks shipping compliance with regulatory standards. Built comprehensive automation covering lot creation, inventory management, shipment tracking, and compliance reporting.',
    techStack: ['Selenium WebDriver', 'Java', 'TestNG', 'Postman', 'MySQL', 'Jenkins'],
    testResults: { passed: 643, failed: 3, skipped: 11 },
    ciStages: [
      { name: 'Build', status: 'pass' },
      { name: 'Functional', status: 'pass' },
      { name: 'DB Validation', status: 'pass' },
      { name: 'Report', status: 'pass' },
    ],
    highlights: [
      'Automated drug lot creation, inventory, and shipment tracking end-to-end',
      'Database validations using MySQL to ensure regulatory data integrity',
      'Compliance reporting verified across all shipment status transitions',
    ],
  },
  {
    id: 'proj-4',
    name: 'Insurance Domain Platform',
    tagline: 'Agent, policyholder & claims management automation',
    status: 'PASS',
    description:
      'Insurance platform managing agents, policyholders, and claims across departments. Enables multi-user record maintenance, communication workflows, and condition-based report generation. Automated complex multi-department workflows including policy creation, claims processing, and regulatory reporting across various insurance product types.',
    techStack: ['Selenium WebDriver', 'Java', 'Cucumber', 'TestNG', 'Rest-Assured', 'MySQL', 'JIRA'],
    testResults: { passed: 512, failed: 5, skipped: 18 },
    ciStages: [
      { name: 'Build', status: 'pass' },
      { name: 'BDD Tests', status: 'pass' },
      { name: 'DB Tests', status: 'pass' },
      { name: 'Report', status: 'pass' },
    ],
    highlights: [
      'BDD framework using Cucumber — test scenarios readable by business stakeholders',
      'Automated claims lifecycle: submission → review → approval → payment',
      'Cross-department data integrity validated through MySQL database testing',
    ],
  },
]

// ─── DEFECT INVESTIGATION ──────────────────────────────────────────────────────
// Generic debugging simulation — represents real investigation workflows

export const defectSteps: DefectStep[] = [
  {
    id: 0,
    phase: 'Detected',
    title: 'Anomaly Detected',
    description:
      'Automated test suite reports unexpected failures in the KYC payment flow. 3 critical test cases failing in Azure Pipelines — blocking the release. Defect logged in JIRA, investigation begins immediately.',
    statusBadge: 'ALERT',
    statusColor: 'red',
  },
  {
    id: 1,
    phase: 'Logs',
    title: 'Log Extraction',
    description:
      'Pulling test execution logs, browser console errors, and API response dumps from the failed pipeline run. Network traces captured from Playwright reporter.',
    logLines: [
      '[ERROR] TC-204: PaymentGateway.submitKYC — Element not found: #submit-btn',
      '[ERROR] TC-205: PaymentGateway.verifyStatus — Expected: SUCCESS, Got: PENDING',
      '[WARN]  TC-206: TaxFiling.uploadDoc — Timeout waiting for upload confirmation',
      '[INFO]  Pipeline: Azure DevOps Build #847 — FAILED at UI Test stage',
      '[ERROR] API Response 422: {"error": "KYC_VERIFICATION_INCOMPLETE"}',
      '[INFO]  Screenshot captured: step_3_kyc_submit_failure.png',
      '[ERROR] Console: Uncaught TypeError: Cannot read property "status" of undefined',
    ],
    statusBadge: 'LOGGING',
    statusColor: 'yellow',
  },
  {
    id: 2,
    phase: 'Analysis',
    title: 'Pattern Analysis',
    description:
      'Cross-referencing failure pattern with recent code commits. A UI change was deployed yesterday — the KYC submit button selector was modified in the frontend. Playwright locator is now stale.',
    statusBadge: 'ANALYZING',
    statusColor: 'yellow',
  },
  {
    id: 3,
    phase: 'Root Cause',
    title: 'Root Cause Identified',
    description:
      'Frontend team changed the submit button from an ID-based selector to a data-testid attribute without notifying QA. All Playwright locators targeting #submit-btn are now broken across 3 test files.',
    codeSnippet:
      '// Before (broken — old selector)\nawait page.click("#submit-btn");\n\n// After (fixed — robust locator)\nawait page.click("[data-testid=\'kyc-submit-btn\']");\n\n// Root cause: frontend change not communicated to QA\n// Prevention: add selector contract tests to block UI changes without QA sign-off',
    statusBadge: 'FOUND',
    statusColor: 'cyan',
  },
  {
    id: 4,
    phase: 'Fix',
    title: 'Fix Deployed',
    description:
      'Updated all 3 test files with the new data-testid locators. Added a locator validation step to the CI pipeline. Raised a process improvement — frontend selector changes now require QA review before merge.',
    statusBadge: 'FIXING',
    statusColor: 'cyan',
  },
  {
    id: 5,
    phase: 'Deployed',
    title: 'Resolution Verified',
    description:
      'All 3 test cases passing in Azure Pipelines. Build #848 green. Release unblocked. JIRA ticket closed with root cause documented. Locator management guide added to team wiki.',
    statusBadge: 'RESOLVED',
    statusColor: 'green',
  },
]

// ─── CERTIFICATIONS & EDUCATION ────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    id: 'edu-1',
    name: 'B.Tech — Electrical & Electronics Engineering',
    issuer: 'Acharya Nagarjuna University (ANUCET)',
    year: '2019',
    badgeColor: 'cyan',
    skills: ['Engineering Fundamentals', 'Problem Solving', 'Technical Analysis'],
    type: 'education',
  },
  {
    id: 'edu-2',
    name: 'Intermediate — Mathematics, Physics & Chemistry',
    issuer: 'Sri Chaitanya Jr. College',
    year: '2015',
    badgeColor: 'purple',
    skills: ['Mathematics', 'Physics', 'Analytical Thinking'],
    type: 'education',
  }
]
