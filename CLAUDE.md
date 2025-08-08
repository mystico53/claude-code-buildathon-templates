# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a minimal hackathon template repository containing a single, highly optimized Next.js template for rapid prototyping and buildathons. The goal is to provide a bare-bones starting point that installs quickly (7 packages, ~30 seconds) and allows developers to add only what they need.

## Core Commands

### Project Creation
```bash
# Primary project creation script (only working script)
./create-project
```

### Template Development Workflow
```bash
# Test the minimal template works correctly
cd templates/nextjs-minimal && npm install && npm run build

# Verify project generation creates working projects
./create-project  # Choose option 1, test the generated project

# Test generated project functionality
cd your-test-project && npm run dev  # Should start on http://localhost:3000
```

### Generated Project Commands
Once a project is created, these are the available commands:
```bash
npm run dev    # Start development server
npm run build  # Build for production  
npm run start  # Start production server
```

## Architecture Overview

### Current Repository Structure
The repository has been simplified to contain only:

- **`/templates/nextjs-minimal/`** - Single minimal Next.js template (7 packages)
- **`create-project`** - Main project generator script with interactive CLI
- **Generated projects** - Created in `/workspace/project-name/` when users run the script

### Template Details
**Minimal Next.js Template** (`/templates/nextjs-minimal/`)
- **7 packages total**: `next`, `react`, `react-dom` + TypeScript types  
- **Zero configuration**: No CSS framework, no database, no forms
- **30-second install time**: Optimized for maximum speed
- **Maximum flexibility**: Add only what you need via npm install

### Key Template Files
- `package.json`: 7 packages (3 runtime + 4 TypeScript dev dependencies)
- `src/app/layout.tsx`: Minimal root layout component
- `src/app/page.tsx`: Simple homepage with basic styling
- `next.config.ts`: Bare Next.js configuration
- `tsconfig.json`: Standard TypeScript config with Next.js paths

### Script Architecture

The `create-project` script is currently **partially functional** due to missing template references:
- **Option 1 (Minimal Next.js)**: ✅ Works - uses `/templates/nextjs-minimal/`
- **Options 2-4**: ❌ Broken - reference non-existent templates (`nextjs-ultimate`, `python-ai`, `neo4j`)

**Current Script Behavior:**
- Validates user input (project names must match `^[a-zA-Z0-9_-]+$`)
- For option 1: Copies `templates/nextjs-minimal` to `/workspace/$name`
- Runs `npm install --progress=true` in the new project
- For options 2-4: Will fail with "Template not found" errors

### Key Design Principles

**Extreme Minimalism**: The template contains only the absolute essentials:
- Next.js 15 + React 19 (latest stable versions)
- TypeScript support (no ESLint or other tooling)
- No CSS framework, no database, no form handling
- Zero configuration - developers add features incrementally

**Performance-First**: 
- 7 packages total (vs industry standard 50-100+)
- ~30-second install time vs 3-5 minutes for typical Next.js setups
- Users add features via documented `npm install` commands only as needed

**Docker-Container Ready**: All paths assume `/workspace/` as the project root

## Template Customization

### Modifying the Minimal Template
**Location**: `/templates/nextjs-minimal/`

**Guidelines**:
- Keep package count ≤ 10 for fast installs
- Avoid adding CSS frameworks, databases, or form libraries by default
- Test `npm install` performance after any changes
- Update template README.md to match actual dependencies

### Fixing the Create Script
**Current Issue**: Options 2-4 reference non-existent templates

**To fix**: Either:
1. Remove options 2-4 from the script (simplify to single template)
2. Create the missing templates (`nextjs-ultimate`, `python-ai`, `neo4j`)

### Adding Features to Generated Projects
The minimal template is designed for incremental enhancement:

**Common Additions**:
```bash
# Styling
npm install tailwindcss @tailwindcss/postcss @tailwindcss/postcss

# Database
npm install @prisma/client prisma

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# UI Components
npm install lucide-react

# State Management
npm install zustand
```

## Current Template Patterns

### Next.js App Router Structure
- **`src/app/layout.tsx`**: Root layout with minimal HTML structure
- **`src/app/page.tsx`**: Homepage with inline styles (no external CSS)
- **App Router**: Uses Next.js 13+ app directory structure
- **TypeScript**: Configured with standard Next.js paths (`@/*` imports)

### Zero-Configuration Approach
- No ESLint, Prettier, or other dev tooling by default
- No CSS framework (developers choose their own)
- No database or backend integrations
- Pure client-side React app ready for any backend

## Environment Considerations

This repository is designed for Docker containers and assumes:
- Node.js 20+ with npm 10+
- `/workspace/` as the working directory root
- Fast internet connection for npm package downloads

## Known Limitations

### Bash Tool Execution Issues
**IMPORTANT**: The Bash tool often fails to execute commands in this Docker container environment due to:
- Container security restrictions and sandboxing
- Architecture mismatches (x86_64 vs ARM64)  
- Permission restrictions on file operations
- Known issue #2900: "Bash Command Execution Failure: Unable to Run Basic Commands"

**Do NOT attempt to use the Bash tool for:**
- `rm` commands (file/directory deletion)
- `mv` commands (file moves)
- `chmod` commands (permission changes)
- Complex file system operations

**Instead:**
- Ask users to run cleanup commands manually in their terminal
- Use Write/Edit tools for file modifications
- Use Read/LS tools for file inspection
- Document required manual commands clearly

This is a documented limitation of Claude Code in containerized environments, not a bug.