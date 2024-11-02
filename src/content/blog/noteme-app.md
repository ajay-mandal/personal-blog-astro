---
title: NoteMe APP
author: Ajay Mandal
pubDatetime: 2024-11-01T14:13:27.092Z
modDatetime: 2024-11-02T09:46:59.638Z
slug: noteme-app
featured: false
draft: false
tags:
  - honojs
  - nextjs
  - typescript
  - crud
  - cloudflare
  - zod
  - api
  - prisma
  - jwt
ogImage: ../../assets/images/noteme-app.png
description: CRUD based nextjs blog app with honojs api on edge runtime deployed with cf workers
---
![note-me-app](@assets/images/noteme-app.png)

<div class="flex justify-between">

[Live Link](https://noteme.ajaymandal.me/)

[Github Link](https://github.com/ajay-mandal/NoteMe-App)

</div>

## Table of contents

## Overview
NoteMe is a web-based blogging platform that enables users to express and share their thoughts online. The application features core CRUD (Create, Read, Update, Delete) functionality, allowing users to manage their blog posts through basic operations. While currently in its initial version with simple paragraph-based posts and without pagination or session management, the app showcases an innovative technical implementation. What makes this project noteworthy is its architecture - it combines Next.js with Hono.js using edge runtime on Cloudflare Workers, resulting in exceptionally fast API performance. This marks my first venture into full-stack development, focusing on demonstrating the powerful synergy between these modern web technologies.

## Tech Stack
The website is built using modern web technologies to ensure high performance, responsiveness, and ease of maintenance. Key technologies include:

- Next.js: The React Framework for frontend
- Hono.js : Backend on Edge Runtime
- Cloudflare Workers: Serverless Deployment
- Prisma: ORM and Accelerate
- Neon DB: Postgress Database