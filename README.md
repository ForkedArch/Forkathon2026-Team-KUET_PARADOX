<img src="https://i.ibb.co.com/7NrtB6Vv/image.png" />

# Forkathon 2026: Five Minutes Before the Deadline by KUET_PARADOX

> **Built for ForkedArch Freshers Hackathon 2026**

🌐 **Live Demo:** https://forkathon2026-team-kuet-paradox.vercel.app/
📦 **GitHub Repository:** https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX

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

The team may have completed the project technically, but confusion, stress, missing information, and unclear responsibilities can still cause the final submission to fail.

The challenge is therefore not only about completing the project.

It is about **coordination under extreme deadline pressure**.

> **Brainstorming Twist:** The system should remain useful even when users are stressed, distracted, or missing important information.

---

# 🤔 KUET_PARADOX's Understanding

We understand the problem as a **last-minute coordination failure**.

Imagine a situation involving our three team members: **Mahir, Abrar, and Joydeep**.

Mahir has completed most of his assigned work and believes that the project is almost ready.

Abrar has worked on another part of the project and has a project file on his computer. However, multiple versions exist, so it is not immediately clear which one is the latest.

Joydeep is ready to handle the final submission.

Everything seems manageable until they realize that only a few minutes are left.

Mahir asks:

> "Which file is the final version?"

Abrar replies:

> "I have the latest one, I think, but I'm not completely sure."

Then Joydeep asks:

> "Who is actually submitting the project?"

At the same time, another team member notices that the README is incomplete, while an important task is still pending.

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
4. Which file/version should be used?
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

Instead of searching through chats, files, personal notes, and conversations during the final minutes, a team can use one centralized emergency workspace to understand:

> **What is done → What is pending → Who owns it → What is urgent → What happens next.**

The system combines project coordination, task management, deadline monitoring, risk analysis, submission verification, file tracking, and emergency communication in one place.

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

The goal is to reduce information overload during high-pressure situations.

---

## ✅ 2. Smart Submission Checklist

A dedicated checklist helps the team verify essential submission requirements.

Example checks include:

* README added
* Public repository/drive link verified
* File size under the allowed limit
* Demo video/link included

Checklist state can be updated through the backend and persisted in the database.

---

## 👥 3. Responsibility Board

The Responsibility Board makes task ownership explicit.

Each task can be associated with a team member so the team can immediately answer:

> **Who is responsible for this task?**

This reduces the common last-minute confusion of:

> "I thought you were doing it."

---

## 📁 4. Final File Guardian

The Final File Guardian helps the team identify the correct final project file.

It tracks important metadata such as:

* file name,
* version,
* uploader,
* file URL,
* final status,
* update time.

This reduces the risk of submitting an outdated or incorrect version.

---

## 🚨 5. Emergency Mode

Emergency Mode is designed for the final high-pressure stage.

It focuses attention on:

* critical tasks,
* urgent checklist items,
* final-file readiness,
* emergency coordination,
* and immediate submission actions.

The purpose is to reduce cognitive overload and show the team what matters most right now.

---

## 📊 6. Deadline Risk Meter

The project is represented using three simple risk levels:

### 🟢 SAFE

Enough time remains and critical work is under control.

### 🟡 WARNING

The deadline is approaching and important work needs attention.

### 🔴 CRITICAL

Immediate action is required.

The Risk Engine uses project conditions such as deadline pressure and unresolved critical work to determine the current state.

---

## ⬆️ 7. Automatic Task Escalation

Unfinished important work becomes more urgent as the deadline approaches.

The purpose is to ensure that high-impact unfinished tasks receive attention before lower-priority work.

---

## 🆘 8. Team Panic Button

The Panic Button provides a fast emergency signal when immediate coordination is needed.

A panic event can be broadcast to connected team members using the realtime communication layer.

This avoids relying entirely on manual messaging when the deadline is close.

---

## 🎯 9. Submission Readiness Score

The system calculates a simple score representing how ready the project is for submission.

The readiness calculation considers project conditions such as:

* task completion,
* checklist progress,
* final-file availability,
* team/project state,
* and remaining critical issues.

The result gives the team a single high-level answer:

> **"How ready are we to submit right now?"**

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
   The team identifies pending tasks and their owners.

4. **Evaluate Risk**
   The Risk Meter determines whether the project is SAFE, WARNING, or CRITICAL.

5. **Escalate Important Work**
   Unfinished high-priority work receives increased urgency.

6. **Activate Emergency Mode**
   When the situation becomes critical, the interface focuses on urgent actions.

7. **Use Panic Button When Necessary**
   The team can trigger an emergency coordination signal.

8. **Verify Submission Checklist**
   Important submission requirements are checked.

9. **Verify Final File**
   The team identifies the correct final file/version.

10. **Calculate Submission Readiness**
    The system calculates a readiness score.

11. **Proceed to Submission**
    Once critical issues are resolved, the team can move toward final submission.

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
                              │ HTTP API
                              ▼
                ┌────────────────────────────┐
                │          BACKEND           │
                │       Node + Express       │
                │                            │
                │  • REST API                │
                │  • Task Logic              │
                │  • Team Logic              │
                │  • Checklist Logic        │
                │  • Deadline Logic          │
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
| Risk Engine       | Backend Logic                  | Calculates project risk state          |
| Escalation Engine | Backend Logic                  | Increases urgency of unfinished work   |
| Readiness Engine  | Backend Logic                  | Calculates submission readiness        |
| Emergency System  | Frontend + Backend + Socket.IO | Emergency Mode and panic coordination  |

---

# 🔗 Component Relationship

The Frontend communicates with the Backend through HTTP API requests.

The Backend then:

1. validates/handles the request,
2. applies application logic,
3. reads or updates project data,
4. communicates with Supabase,
5. returns the processed result to the Frontend.

For realtime emergency communication, Socket.IO can broadcast events to connected clients.

```text
React
  │
  │ fetch / HTTP request
  ▼
Express API
  │
  ├── Controllers
  │
  ├── Services / Engines
  │
  ▼
Supabase PostgreSQL
  │
  └── Persistent Data

Realtime:
Frontend ↔ Socket.IO ↔ Backend
```

---

# 🗄️ Database Structure

KUET_PARADOX uses **Supabase PostgreSQL** for persistent structured data.

The database is organized around the main entities required by the application.

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

## Why PostgreSQL?

Structured project data such as tasks, team members, deadlines, checklist states, risk information, and project status naturally fit a relational database model.

Supabase provides the PostgreSQL database layer while also providing integrated file storage for project files.

---

# 📁 File Storage

The application separates **structured metadata** from **actual file storage**.

```text
Supabase PostgreSQL
        │
        └── File metadata
             • name
             • version
             • uploader
             • final status
             • URL

Supabase Storage
        │
        └── Actual project files
```

This separation keeps database records lightweight while allowing project files to be managed through storage.

---

# 🔌 API Documentation

KUET_PARADOX uses REST-style HTTP APIs between the Frontend and Backend.

## Base URL

### Local Development

```text
http://localhost:5000
```

### Main API Prefix

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

---

## ☑️ Checklist API

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
| GET    | `/api/project/status`           | Get project submission state          |
| POST   | `/api/project/lock-final`       | Lock the final file                   |
| POST   | `/api/project/assign-roles`     | Assign submitter and backup submitter |
| POST   | `/api/project/checklist/toggle` | Update project checklist state        |

---

# ⚙️ Backend Structure

The backend separates routing, controllers, and business logic.

```text
BACKEND
│
├── routes/
│   ├── taskRoutes.js
│   ├── teamRoutes.js
│   ├── checklistRoutes.js
│   ├── deadlineRoutes.js
│   ├── riskRoutes.js
│   ├── emergencyRoutes.js
│   ├── fileRoutes.js
│   └── readinessRoutes.js
│
├── controllers/
│   ├── taskController.js
│   ├── teamController.js
│   ├── checklistController.js
│   ├── deadlineController.js
│   ├── riskController.js
│   ├── emergencyController.js
│   ├── fileController.js
│   └── readinessController.js
│
├── services/
│   ├── riskEngine.js
│   ├── escalationEngine.js
│   └── readinessEngine.js
│
├── config/
│   └── supabase.js
│
├── data/
│   └── temporaryData.js
│
└── server.js
```

This separation allows API endpoints, business logic, and database access to evolve independently.

---

# 🔄 API Request Flow

A normal task request follows this pattern:

```text
USER
 │
 ▼
REACT FRONTEND
 │
 │ GET /api/tasks
 ▼
EXPRESS ROUTE
 │
 ▼
TASK CONTROLLER
 │
 ▼
SUPABASE DATABASE
 │
 │ task data
 ▼
TASK CONTROLLER
 │
 ▼
JSON RESPONSE
 │
 ▼
REACT UI
```

Example:

```text
GET /api/tasks

        ↓

Backend retrieves tasks

        ↓

Supabase returns task data

        ↓

Backend sends JSON response

        ↓

Frontend displays tasks
```

For updates:

```text
User changes task
       ↓
PUT /api/tasks/:id
       ↓
Controller
       ↓
Supabase update
       ↓
Updated result
       ↓
Frontend refresh/update
```

---

# ⚡ Realtime Communication

For emergency coordination, KUET_PARADOX uses **Socket.IO** alongside REST APIs.

REST APIs are used for persistent request/response operations.

Socket.IO is used for realtime events such as:

* panic alerts,
* project-state updates,
* emergency coordination.

Conceptually:

```text
Teammate A
    │
    │ Panic Button
    ▼
Backend / Socket.IO
    │
    ├───────────────┐
    ▼               ▼
Teammate B       Teammate C
```

This means an urgent event does not have to wait for a normal page refresh before connected teammates are notified.

---

# 🧠 AI Usage

## Was AI used in the development process?

**Yes.**

AI assistance was used during development for:

* brainstorming and refining the solution,
* breaking down the problem statement,
* planning system architecture,
* generating and explaining implementation code,
* debugging errors,
* improving API structure,
* improving documentation,
* and reviewing the project workflow.

The team remained responsible for deciding the final system design, feature set, implementation choices, testing, and submission.

## Is the application itself powered by an external AI model?

**No external LLM API is required for the current application runtime.**

KUET_PARADOX does not depend on Gemini/OpenAI/etc. to calculate its core project state.

Instead, the application uses deterministic backend logic for:

* Deadline Risk,
* Task Escalation,
* Submission Readiness,
* Emergency state,
* and project coordination.

This design choice makes the core emergency workflow:

* predictable,
* fast,
* explainable,
* and independent of an external AI model.

## Why did we use AI during development?

The problem itself involves **stress, distraction, incomplete information, and last-minute decision making**.

AI assistance helped the team rapidly explore these situations, translate the problem into actionable product features, and iterate on implementation during the limited hackathon development time.

However, the final application's critical decisions remain based on explicit application logic rather than unpredictable AI-generated decisions.

---

# 🌐 External Services

## 1. Supabase

**Purpose:**

* PostgreSQL database
* Persistent project data
* Team/member data
* Task data
* Checklist data
* Deadline/risk-related data
* Project-state data
* File metadata
* File storage

```text
Application
    ↓
Node + Express
    ↓
Supabase
 ┌───────────────┐
 │ PostgreSQL    │
 │ Storage       │
 └───────────────┘
```

---

## 2. Vercel

**Purpose:**

* Public web deployment
* Hosting the frontend
* Hosting/deploying application services where configured

The project is available publicly through the deployed Vercel frontend.

**Live Demo:**

https://forkathon2026-team-kuet-paradox.vercel.app/

---

## 3. Socket.IO

**Purpose:**

Socket.IO is used as the realtime communication layer for emergency/panic events and project-state updates between connected clients and the backend.

---

# 🛠️ Technology Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Frontend        | React + Vite        |
| Backend         | Node.js + Express   |
| Database        | Supabase PostgreSQL |
| File Storage    | Supabase Storage    |
| Realtime        | Socket.IO           |
| Deployment      | Vercel              |
| API Style       | REST                |
| Language        | JavaScript          |
| Version Control | Git + GitHub        |

---

# 🔐 Security & Configuration

Sensitive credentials are kept outside the source code through environment variables.

Example:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

The `.env` file should never be committed to GitHub.

Environment variables are used so deployment credentials and service keys do not need to appear inside the application source code.

---

# 🧪 Testing Strategy

Before final submission, the following flow should be verified:

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
Risk state loads
      ↓
Emergency actions work
      ↓
Final file information loads
      ↓
Readiness score loads
      ↓
Page refresh keeps persistent data
```

The main goal of testing is not simply to check individual buttons.

It is to verify that the complete flow:

> **Frontend → Backend → Database → Frontend**

works reliably.

---

# ▶️ Local Development

## Frontend

```bash
cd FRONTEND
npm install
npm run dev
```

The Vite development server will provide a local URL such as:

```text
http://localhost:5173
```

or another available port.

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

# 🚀 Why KUET_PARADOX?

Most project-management systems are designed for normal working conditions.

KUET_PARADOX focuses on a different moment:

> **The final five minutes.**

Instead of asking the team to process more information, KUET_PARADOX tries to reduce the cognitive load by answering the most important questions immediately:

```text
What is done?
What is pending?
Who owns it?
What is urgent?
Which file is final?
Are we ready?
What should we do next?
```

The system turns a chaotic final stage into a **prioritized emergency workflow**.

---

# 🏆 Core Idea

> **Don't make the team think more when the deadline is approaching. Make the next action obvious.**

KUET_PARADOX is designed to transform:

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

---

# 🌐 Live Demo

**Frontend:**

https://forkathon2026-team-kuet-paradox.vercel.app/

**GitHub:**

https://github.com/ForkedArch/Forkathon2026-Team-KUET_PARADOX

---

# 📌 Project Status

| Area                       | Status |
| -------------------------- | ------ |
| Problem Definition         | ✅      |
| Solution Design            | ✅      |
| React Frontend             | ✅      |
| Node/Express Backend       | ✅      |
| REST API Structure         | ✅      |
| Supabase Database          | ✅      |
| File Storage               | ✅      |
| Risk Engine                | ✅      |
| Escalation Engine          | ✅      |
| Readiness Engine           | ✅      |
| Emergency System           | ✅      |
| Realtime Communication     | ✅      |
| GitHub Repository          | ✅      |
| Public Frontend Deployment | ✅      |

---

# 📜 License

This project is released under the **MIT License**.

---

<b>Forkathon: Freshers Hackathon 2026 presented by ForkedArch powered by XtendArena</b>
