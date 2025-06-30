# Kayzen - Personalized Life Navigator

Kayzen is a data-driven personal assistant designed to help you optimize tasks, time, energy and finances. Inspired by the philosophy of _Kaizen_, it focuses on small improvements each day to support continuous growth.

## Vision & Principles
- **Personalized decisions** powered by your actual habits and data
- **Dynamic prioritization** considering urgency, context and capacity
- **Sustainable workload** that balances effort and prevents burnout
- **Continuous learning** from every interaction and feedback
- **Collaborative growth** between you and the system
- **Holistic life management** across tasks, energy, time and finances

## Key Concepts
- **Duration & Effort**: estimates vs. actual for each task
- **Energy Level**: subjective feeling before/after work
- **Randomness Events**: intentional or unexpected deviations from plan
- **Financial Obligations**: recurring or one‑time payments

## Features
### Task Lifecycle
1. Define tasks with name, category, due date, estimated duration and effort
2. Start, pause and complete tasks while Kayzen logs actual duration automatically
3. Provide post‑completion feedback on effort, energy and interruptions

### Activity Tracking
- Kayzen computes actual duration, compares estimates, and learns recurrence patterns
- Logging randomness events helps understand the impact of spontaneous actions

### Intelligent Prioritization
- Suggests **Next Best Action** based on deadlines, effort, energy, and context
- Balances workload over days and weeks to prevent overload

### Learning & Growth
- Daily/weekly summaries highlight time spent, estimation accuracy and randomness impact
- Progress tracking shows trends in task completion and energy management

### Financial Management
- Track recurring obligations and income
- Project future financial status and answer "Can I afford X?" queries

## User Experience
- Dashboard shows 3 recommended tasks, energy level and financial snapshot
- Task creation and randomness logging use simple, button‑driven flows
- Visual reports provide quick insights without complex data tables

## External Integrations
- **Telegram bot** reminders for upcoming tasks and obligations
- **Google Calendar** event scheduling
- Future phases may connect to financial APIs for bank data

## Architecture
- **Frontend**: React + TypeScript (Vite) — this repository
- **Backend**: FastAPI deployed on Vercel
- **Database**: MongoDB Atlas
- **Frontend hosting**: Render

Security best practices include OAuth 2.0 for Google, secure token storage for Telegram and end‑to‑end encryption for all data.

## Future Enhancements
- Natural language input for tasks and expenses
- Cross‑device sync and collaborative features
- Gamification and deeper biometric integrations
- Direct bank connections and advanced budgeting

Kayzen aims to be your partner for continuous improvement, helping you navigate daily tasks, energy levels and finances with clarity and confidence.
