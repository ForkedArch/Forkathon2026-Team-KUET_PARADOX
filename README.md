<img src="https://i.ibb.co.com/7NrtB6Vv/image.png" alt="KUET_PARADOX" />

# Forkathon 2026: Five Minutes Before the Deadline by KUET_PARADOX

> **Built for ForkedArch Freshers Hackathon 2026**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://forkathon2026-team-kuet-paradox-7swmmqapj-tjmahir609-xyz.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX)


presentational video is here ::::

https://youtu.be/g7seRcU-mi0?si=WM5mUA00QeQCAH_O


### 🌐 Live Demo

**Frontend:**
https://forkathon2026-team-kuet-paradox-7swmmqapj-tjmahir609-xyz.vercel.app

**GitHub Repository:**
https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX

---

# 👥 Team

| Name                  |    Roll | Department | GitHub                                                         |
| --------------------- | ------: | ---------- | -------------------------------------------------------------- |
| **Mahir Tajwar**      | 2507074 | CSE        | [@tjmahir609-xyz](https://github.com/tjmahir609-xyz)           |
| **Abrar Jawar**       | 2507080 | CSE        | [@abrarjawer09-glitch](https://github.com/abrarjawer09-glitch) |
| **Joydeep Chowdhury** | 2507087 | CSE        | [@chowdhury52507087](https://github.com/chowdhury52507087)     |

---

# 🧩 Problem Statement

## Five Minutes Before the Deadline

It's 11:55 PM.

A team has a project due at midnight. Most of the actual development work is already finished, but the final few minutes suddenly become chaotic.

One teammate thinks another person is submitting the project.

Another teammate has multiple versions of the project file and cannot confidently identify the correct one.

Someone realizes that the README is incomplete.

Another important task is still pending.

The team starts asking:

* Which file is the final version?
* Who is responsible for the unfinished task?
* Who is submitting?
* Is the README complete?
* What should be checked first?
* Are we actually ready to submit?

The project may be technically complete, but confusion, stress, missing information, and unclear responsibilities can still cause the final submission to fail.

The challenge is therefore not only about completing a project.

It is about **coordination under extreme deadline pressure**.

> **Brainstorming Twist:** The system should remain useful even when users are stressed, distracted, or missing important information.

---

# 🤔 KUET_PARADOX's Understanding

We understand the problem as a **last-minute coordination failure**.

Imagine a situation involving our three team members: **Mahir, Abrar, and Joydeep**.

Mahir has completed most of his assigned work and believes the project is almost ready.

Abrar has worked on another part of the project and has a project file on his computer. However, there are multiple versions of the file, so it is not immediately clear which one is the latest.

Joydeep is ready to handle the final submission.

Everything seems manageable until they realize that only a few minutes are left.

Mahir asks:

> "Which file is the final version?"

Abrar replies:

> "I have the latest one, I think, but I'm not completely sure."

Then Joydeep asks:

> "Who is actually submitting the project?"

At the same time, another team member notices that the README is incomplete and another important task is still pending.

Now the team starts spending valuable time discussing:

* Which file should be used?
* Who owns the unfinished task?
* Is the README complete?
* Who will submit the project?
* Has everything required been checked?
* What should be done first?

The team may have already completed most of the actual development work.

The problem is now **coordination and clarity**.

## What Do We Actually Need?

A team working under a strict deadline needs to know immediately:

1. What has already been completed?
2. What is still pending?
3. Who is responsible for each task?
4. Which file or version should be used?
5. Who is responsible for final submission?
6. What still needs to be checked?
7. What should be done first?

If these answers are unclear, even a strong project can lose valuable time in the final stage.

## 🎯 Our Core Understanding

> **A team can finish the project but still fail at the final stage because of confusion, poor coordination, and unclear responsibilities.**

When people are stressed and the deadline is approaching, they need **clear actions instead of more confusion**.

The system should answer:

> **What is completed, what is pending, who is responsible, and what should we do next?**

That is the problem KUET_PARADOX aims to solve.

---

# 💡 Proposed Solution

## KUET_PARADOX

**KUET_PARADOX** is a deadline-focused team coordination system designed to transform chaotic last-minute project submission into a **clear, prioritized, and coordinated workflow**.

Instead of searching through chats, files, personal notes, and separate conversations during the final minutes, a team can use one centralized emergency workspace to understand:

> **What is done → What is pending → Who owns it → What is urgent → What happens next.**

The system combines:

* task management,
* responsibility assignment,
* deadline monitoring,
* risk evaluation,
* task escalation,
* submission checklist verification,
* final-file tracking,
* emergency coordination,
* and submission-readiness calculation.

The goal is not to give the team more information.

The goal is to make the **next action obvious**.

---

# ✨ Key Features

## 🚨 1. Emergency Dashboard

A centralized dashboard that presents the most important project information at a glance.

It brings together:

* deadline status,
* current risk,
* task progress,
* team responsibility,
* checklist progress,
* final-file status,
* emergency status,
* and submission readiness.

The dashboard is designed specifically for stressed, distracted users who need the most important information immediately.

---

## ✅ 2. Smart Submission Checklist

A dedicated checklist helps the team verify important submission requirements.

Example checks include:

* README added
* Repository/public link verified
* File size checked
* Demo video/link included

Checklist state can be updated through the backend and stored persistently.

---

## 👥 3. Responsibility Board

The Responsibility Board makes task ownership explicit.

Every important task can have a responsible team member.

This allows the team to immediately answer:

> **Who is responsible for this?**

This reduces last-minute confusion and duplicated work.

---

## 📁 4. Final File Guardian

The Final File Guardian helps the team identify the correct final project file and its latest version.

It tracks information such as:

* file name,
* version,
* uploaded by,
* file URL,
* final status,
* update time.

The actual file can be stored using the application's file-storage layer while the database keeps its metadata.

---

## 🚨 5. Emergency Mode

Emergency Mode is designed for the final high-pressure stage.

It focuses the team on:

* critical tasks,
* urgent checklist items,
* unresolved issues,
* final-file readiness,
* and immediate submission actions.

The purpose is to reduce cognitive overload when time is running out.

---

## 📊 6. Deadline Risk Meter

The system represents project risk using three simple levels:

### 🟢 SAFE

Enough time remains and critical work is under control.

### 🟡 WARNING

The deadline is approaching and important work needs attention.

### 🔴 CRITICAL

Immediate action is required.

The risk level is determined by backend application logic using project/deadline conditions.

---

## ⬆️ 7. Automatic Task Escalation

As the deadline becomes more urgent, unfinished important tasks receive stronger attention.

This helps the team prioritize high-impact work before lower-priority tasks.

---

## 🆘 8. Team Panic Button

The Panic Button provides a fast emergency signal.

When immediate coordination is necessary, a teammate can trigger an emergency event rather than relying entirely on manual messaging.

Realtime communication is handled through the application's Socket.IO layer.

---

## 🎯 9. Submission Readiness Score

The system calculates a readiness score representing how close the project is to being ready for submission.

The score considers project information such as:

* completed tasks,
* checklist completion,
* final-file availability,
* unresolved critical issues,
* and current project state.

The result answers one simple question:

> **How ready are we to submit right now?**

---

# 🔄 System Workflow

```text
👥 TEAM MEMBERS
       │
       ▼
📊 OPEN EMERGENCY DASHBOARD
       │
       ▼
⏱️ CHECK REMAINING DEADLINE
       │
       ▼
📋 CHECK TASKS & RESPONSIBILITIES
       │
       ▼
📊 DEADLINE RISK METER
       │
       ├───────────────┐
       │               │
       ▼               ▼
    🟢 SAFE        🟡 WARNING
       │               │
       │               ▼
       │       ⬆️ TASK ESCALATION
       │               │
       └───────┬───────┘
               │
               ▼
          🔴 CRITICAL
               │
               ▼
        🚨 EMERGENCY MODE
               │
        ┌──────┴──────┐
        ▼             ▼
   🆘 PANIC       🎯 PRIORITIZE
    BUTTON           TASKS
        │             │
        └──────┬──────┘
               ▼
        ✅ SMART CHECKLIST
               │
               ▼
       📁 FINAL FILE GUARDIAN
               │
               ▼
       🎯 READINESS SCORE
               │
               ▼
       🚀 READY TO SUBMIT
```

## Workflow Steps

1. **Open Dashboard**
   Team members enter a centralized view of the current project state.

2. **Check Deadline**
   The system considers the remaining time before submission.

3. **Review Tasks and Responsibilities**
   The team identifies pending work and its owner.

4. **Evaluate Risk**
   The Risk Meter determines whether the project is SAFE, WARNING, or CRITICAL.

5. **Escalate Important Work**
   Unfinished high-priority work receives stronger attention.

6. **Activate Emergency Mode**
   When the project becomes critical, the interface focuses on urgent actions.

7. **Use Panic Button When Necessary**
   The team can trigger an emergency coordination event.

8. **Verify Submission Checklist**
   Important requirements are checked.

9. **Verify Final File**
   The team confirms the correct project version.

10. **Calculate Readiness**
    The system calculates the current submission-readiness level.

11. **Proceed to Submission**
    Once critical issues are resolved, the team proceeds to final submission.

---

# 🏗️ System Architecture

KUET_PARADOX follows a:

> **Frontend → Backend → Database & File Storage**

architecture.

```text
                         👥 TEAM MEMBERS
                               │
                               ▼
                ┌────────────────────────────┐
                │          FRONTEND          │
                │         React + Vite       │
                │                            │
                │  • Emergency Dashboard     │
                │  • Task Management         │
                │  • Responsibility Board    │
                │  • Smart Checklist         │
                │  • Final File Guardian     │
                │  • Emergency Mode          │
                │  • Deadline Risk Meter     │
                │  • Team Panic Button       │
                │  • Submission Readiness    │
                └─────────────┬──────────────┘
                              │
                              │ REST API Requests
                              ▼
                ┌────────────────────────────┐
                │          BACKEND           │
                │       Node + Express       │
                │                            │
                │  • REST API                │
                │  • Task Logic              │
                │  • Team Logic              │
                │  • Checklist Logic        │
                │  • Deadline Logic         │
                │  • Risk Engine             │
                │  • Escalation Engine       │
                │  • Readiness Engine        │
                │  • Emergency Logic         │
                │  • File Logic              │
                └─────────────┬──────────────┘
                              │
                 ┌────────────┴────────────┐
                 ▼                         ▼
       ┌─────────────────────┐   ┌─────────────────────┐
       │       DATABASE      │   │     FILE STORAGE     │
       │       Supabase      │   │       Supabase       │
       │      PostgreSQL     │   │       Storage        │
       │                     │   │                      │
       │  • Team Members     │   │  • Project Files     │
       │  • Tasks            │   │  • Final Files       │
       │  • Checklists       │   │  • File Metadata     │
       │  • Deadlines        │   │  • File Versions     │
       │  • Risk Data        │   │                      │
       │  • Project State    │   │                      │
       └─────────────────────┘   └─────────────────────┘
```

## 🧩 Main Components

| Component         | Technology                     | Responsibility                         |
| ----------------- | ------------------------------ | -------------------------------------- |
| Frontend          | React + Vite                   | User interface and emergency dashboard |
| Backend           | Node.js + Express              | REST API and application logic         |
| Database          | Supabase PostgreSQL            | Persistent project data                |
| File Storage      | Supabase Storage               | Project/final file storage             |
| Risk Engine       | Backend Logic                  | Calculates project risk                |
| Escalation Engine | Backend Logic                  | Escalates unfinished important tasks   |
| Readiness Engine  | Backend Logic                  | Calculates submission readiness        |
| Emergency System  | Frontend + Backend + Socket.IO | Emergency Mode and panic coordination  |
| Version Control   | Git + GitHub                   | Source control and collaboration       |
| Deployment        | Vercel                         | Public web deployment                  |

---

# 🔗 Component Relationship

The Frontend communicates with the Backend through HTTP API requests.

The Backend:

1. receives the request,
2. processes the application logic,
3. reads or updates Supabase data,
4. returns the result to the Frontend.

Realtime emergency communication uses Socket.IO.

```text
React Frontend
      │
      │ HTTP / REST
      ▼
Node + Express
      │
      ├──────────────► Risk / Escalation / Readiness Logic
      │
      ▼
Supabase PostgreSQL
      │
      └──────────────► Supabase Storage

Realtime:
Frontend ↔ Socket.IO ↔ Backend
```

---

# 🗄️ Database Structure

KUET_PARADOX uses **Supabase PostgreSQL** for persistent structured project data.

```text
SUPABASE DATABASE
│
├── team_members
│   ├── id
│   ├── name
│   ├── roll
│   ├── github
│   ├── role
│   └── status
│
├── tasks
│   ├── id
│   ├── title
│   ├── description
│   ├── assigned_to
│   ├── status
│   ├── priority
│   ├── deadline
│   └── created_at
│
├── checklists
│   ├── id
│   ├── task
│   ├── completed
│   └── created_at
│
├── deadlines
│   ├── id
│   ├── deadline_time
│   ├── warning_time
│   └── critical_time
│
├── risks
│   ├── id
│   ├── score
│   ├── level
│   └── updated_at
│
├── project_state
│   ├── id
│   ├── is_locked
│   ├── final_file_url
│   ├── submitter
│   ├── backup_submitter
│   └── updated_at
│
└── project_files
    ├── id
    ├── file_name
    ├── file_url
    ├── version
    ├── uploaded_by
    ├── is_final
    └── created_at
```

## Why Supabase?

Supabase provides the PostgreSQL database layer needed for structured application data while also providing integrated file storage.

This allows the application to keep:

* tasks,
* team members,
* checklist states,
* deadlines,
* risks,
* project state,
* and file metadata

in persistent storage.

---

# 📁 File Storage

The application separates file metadata from the actual file.

```text
Supabase PostgreSQL
        │
        └── File metadata
             • Name
             • Version
             • Uploader
             • Final status
             • URL

Supabase Storage
        │
        └── Actual project files
```

This keeps structured database records separate from uploaded project files.

---

# 🔌 API Documentation

KUET_PARADOX uses REST-style APIs to connect the Frontend with the Backend.

## Base URL

### Local Development

```text
http://localhost:5000
```

### API Prefix

```text
/api
```

---

## 👥 Team API

| Method | Endpoint        | Purpose              |
| ------ | --------------- | -------------------- |
| GET    | `/api/team`     | Get team members     |
| POST   | `/api/team`     | Add a team member    |
| PUT    | `/api/team/:id` | Update a team member |
| DELETE | `/api/team/:id` | Delete a team member |

---

## ✅ Task API

| Method | Endpoint         | Purpose       |
| ------ | ---------------- | ------------- |
| GET    | `/api/tasks`     | Get all tasks |
| POST   | `/api/tasks`     | Create a task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Task Flow

```text
React
  │
  │ POST /api/tasks
  ▼
Express
  │
  ▼
Task Controller
  │
  ▼
Supabase
  │
  ▼
tasks table
```

---

## ✅ Checklist API

| Method | Endpoint             | Purpose                |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/checklist`     | Get checklist items    |
| PUT    | `/api/checklist/:id` | Update checklist state |

---

## ⏱️ Deadline API

| Method | Endpoint        | Purpose                  |
| ------ | --------------- | ------------------------ |
| GET    | `/api/deadline` | Get deadline information |

---

## 📊 Risk API

| Method | Endpoint    | Purpose                  |
| ------ | ----------- | ------------------------ |
| GET    | `/api/risk` | Get current project risk |

---

## 🚨 Emergency API

| Method | Endpoint                    | Purpose                   |
| ------ | --------------------------- | ------------------------- |
| GET    | `/api/emergency`            | Get emergency state       |
| POST   | `/api/emergency/activate`   | Activate emergency mode   |
| POST   | `/api/emergency/deactivate` | Deactivate emergency mode |
| POST   | `/api/emergency/panic`      | Trigger panic event       |

---

## 📈 Escalation API

| Method | Endpoint          | Purpose                    |
| ------ | ----------------- | -------------------------- |
| GET    | `/api/escalation` | Get escalation information |

The escalation logic is handled by backend services that evaluate unfinished important work as the deadline becomes more urgent.

---

## 📁 File API

| Method | Endpoint         | Purpose                  |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/files`     | Get project files        |
| POST   | `/api/files`     | Add/upload file metadata |
| PUT    | `/api/files/:id` | Update file metadata     |
| DELETE | `/api/files/:id` | Delete file metadata     |

---

## 🎯 Readiness API

| Method | Endpoint         | Purpose                        |
| ------ | ---------------- | ------------------------------ |
| GET    | `/api/readiness` | Get submission readiness score |

---

## 🔒 Project State API

| Method | Endpoint                        | Purpose                               |
| ------ | ------------------------------- | ------------------------------------- |
| GET    | `/api/project/status`           | Get current project state             |
| POST   | `/api/project/lock-final`       | Lock the final file                   |
| POST   | `/api/project/assign-roles`     | Assign submitter and backup submitter |
| POST   | `/api/project/checklist/toggle` | Update project checklist state        |

---

# 🧠 Business Logic

The application contains dedicated backend services for its core decision systems.

## Risk Engine

The Risk Engine evaluates project conditions and produces a simple project risk state.

```text
Project conditions
       ↓
Risk calculation
       ↓
SAFE / WARNING / CRITICAL
```

## Escalation Engine

The Escalation Engine identifies important unfinished tasks and increases their urgency as the deadline becomes more critical.

```text
Pending important task
       ↓
Deadline pressure
       ↓
Higher urgency
```

## Readiness Engine

The Readiness Engine combines multiple project conditions into a single submission-readiness result.

```text
Tasks
  +
Checklist
  +
Final File
  +
Critical Issues
      ↓
Readiness Score
```

---

# ⚡ Realtime Communication

The system uses **Socket.IO** for realtime communication.

REST APIs are used for normal persistent operations.

Socket.IO is used for emergency-related realtime events.

```text
Teammate A
    │
    │ Panic Button
    ▼
Node + Socket.IO
    │
    ├───────────────┐
    ▼               ▼
Teammate B       Teammate C
```

This allows an emergency event to be communicated to connected teammates without depending entirely on manual page refresh or separate messaging.

---

# 🤖 AI Usage

## AI in the Development Process

AI assistance was used during the development process for:

* brainstorming the solution,
* exploring the problem statement,
* designing the system architecture,
* structuring the feature set,
* generating implementation code,
* debugging implementation issues,
* improving documentation,
* reviewing workflows,
* and accelerating development under the hackathon time constraint.

The final implementation decisions, integration, testing, and project direction remained the responsibility of the team.

## Is the Application Powered by an External AI API?

**Not in the current runtime implementation.**

The application does not depend on a live Gemini/OpenAI/etc. API for its core functionality.

Instead, the main intelligent behaviors are implemented through explicit backend logic:

* Deadline Risk
* Task Escalation
* Submission Readiness
* Emergency State
* Project Coordination

This makes the core workflow:

* predictable,
* explainable,
* fast,
* and independent of external LLM availability.

## Why Did We Use AI During Development?

The challenge involves users who may be:

* stressed,
* distracted,
* overloaded,
* or missing important information.

AI assistance helped us rapidly translate those situations into a practical product design and iterate quickly during the limited hackathon development time.

The final application itself keeps its critical workflow decisions deterministic and rule-based.

---

# 🌐 External Services

## 1. Supabase

**Used for:**

* PostgreSQL database
* persistent project data
* team data
* task data
* checklist data
* deadline/risk data
* project-state data
* file metadata
* file storage

---

## 2. Vercel

**Used for:**

* public frontend deployment
* hosting the live web application

### Live Frontend

https://forkathon2026-team-kuet-paradox-7swmmqapj-tjmahir609-xyz.vercel.app

---

## 3. Socket.IO

**Used for:**

* realtime emergency communication
* panic events
* connected-client updates

---

# 🛠️ Technology Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Frontend        | React + Vite        |
| Backend         | Node.js + Express   |
| Database        | Supabase PostgreSQL |
| File Storage    | Supabase Storage    |
| Realtime        | Socket.IO           |
| API             | REST                |
| Language        | JavaScript          |
| Version Control | Git + GitHub        |
| Deployment      | Vercel              |

---

# 🔐 Security & Configuration

Sensitive configuration values are stored through environment variables instead of being hard-coded into application source files.

Example:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

The `.env` file should never be committed to GitHub.

The Supabase service-role key must remain server-side and must never be exposed in frontend code.

---

# 🧪 Testing Strategy

The complete application should be tested through the following flow:

```text
Frontend opens
      ↓
Backend responds
      ↓
API endpoints respond
      ↓
Database returns data
      ↓
Task can be created/updated
      ↓
Checklist can be updated
      ↓
Team information loads
      ↓
Risk loads
      ↓
Emergency actions work
      ↓
Final-file information loads
      ↓
Readiness score loads
      ↓
Refresh page
      ↓
Persistent data remains available
```

The objective is to verify the complete:

> **Frontend → Backend → Database → Frontend**

cycle.

---

# ▶️ Local Development

## Frontend

```bash
cd FRONTEND
npm install
npm run dev
```

Vite will provide a local development URL.

## Backend

```bash
cd BACKEND
npm install
npm start
```

The backend runs on:

```text
http://localhost:5000
```

---

# 📂 Repository Structure

```text
Forkathon2026-Team-KUET_PARADOX
│
├── FRONTEND/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── BACKEND/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

# 🚀 Deployment

The frontend is deployed publicly using Vercel.

### Live Demo

**https://forkathon2026-team-kuet-paradox-7swmmqapj-tjmahir609-xyz.vercel.app**

The source code is maintained in the GitHub repository:

**https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX**

The deployed application is intended to give judges a direct way to experience the project rather than only reviewing screenshots or source code.

---

# 🏆 Why KUET_PARADOX?

Traditional project-management systems are usually designed for normal working conditions.

KUET_PARADOX focuses on something different:

> **The final five minutes.**

When the deadline is close, users should not have to process more complexity.

They need immediate answers:

```text
What is done?
What is pending?
Who owns it?
What is urgent?
Which file is final?
Are we ready?
What should we do next?
```

KUET_PARADOX turns those questions into a single, prioritized workflow.

---

# 🎯 Core Idea

```text
CONFUSION
    ↓
CLARITY
    ↓
PRIORITY
    ↓
COORDINATION
    ↓
SUBMISSION READINESS
```

> **Don't make the team think more when the deadline is approaching. Make the next action obvious.**

---

# 🌐 Links

### Live Demo

https://forkathon2026-team-kuet-paradox-7swmmqapj-tjmahir609-xyz.vercel.app

### GitHub Repository

https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX

---

# 📜 License

This project is released under the **MIT License**.

---

<b>Forkathon: Freshers Hackathon 2026 presented by ForkedArch powered by XtendArena</b>
