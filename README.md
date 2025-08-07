# 🚀 Claude Code Buildathon Templates (2025)

**Ready-to-hack templates for your next buildathon or hackathon!**

## 📋 Quick Start

```bash
# Clone this repository
git clone https://github.com/mystico53/claude-code-buildathon-templates.git
cd claude-code-buildathon-templates

# Use the project generator
./new-project.sh
```

## 🎯 Templates Available

### 1. 🌐 Next.js 15 Ultimate (`nextjs-ultimate/`)
**Perfect for:** Web apps, AI interfaces, real-time features, full-stack applications

**Pre-configured:**
- ✅ Next.js 15 + React 19 + Turbopack
- ✅ TypeScript + Tailwind CSS + ESLint
- ✅ Prisma ORM + SQLite database
- ✅ File upload API routes
- ✅ Form handling with Zod validation
- ✅ Dark mode ready (next-themes)
- ✅ Utility functions and UI helpers

**Quick additions:**
```bash
npm install openai @vercel/ai    # AI features
npm install recharts             # Charts & visualizations
npm install framer-motion        # Smooth animations
```

### 2. 🐍 FastAPI AI/ML (`python-ai/`)
**Perfect for:** AI/ML APIs, data processing, backend services, model endpoints

**Pre-configured:**
- ✅ FastAPI with async/await patterns
- ✅ Pydantic v2 for data validation
- ✅ Modern Python structure
- ✅ CORS middleware for frontend integration
- ✅ File upload endpoints
- ✅ Health check endpoints
- ✅ Auto-generated API docs

**Quick additions:**
```bash
pip install openai pandas scikit-learn transformers
```

### 3. 🕸️ Neo4j Graph App (`neo4j/`)
**Perfect for:** Social networks, recommendation engines, knowledge graphs, network analysis

**Pre-configured:**
- ✅ Next.js 15 frontend + Neo4j 5.x database
- ✅ Modern Neo4j driver with connection pooling
- ✅ Common graph queries (shortest path, recommendations)
- ✅ Docker Compose for local development
- ✅ TypeScript interfaces for graph data

**Includes:**
- Social connection queries
- Recommendation algorithms
- Path finding utilities
- Network analysis helpers

## 🎮 Interactive Project Creator

The `new-project.sh` script guides you through creating a new project:

```bash
./new-project.sh
```

**Features:**
- 📋 Interactive template selection
- 🚀 Automatic dependency installation
- 📝 Ready-to-run setup
- 💡 Helpful next-step suggestions

## 🚀 Template Philosophy

**Minimal by Design:** Templates include only essential, proven packages. Add what you need for your specific project.

**2025 Best Practices:** 
- Latest stable versions
- Modern patterns and conventions
- TypeScript-first approach
- Performance optimized

**Hackathon Ready:**
- Quick setup (< 5 minutes)
- Pre-configured common features
- Clear documentation
- Deploy-ready configurations

## 📖 Usage Examples

### Web App with AI Features
```bash
./new-project.sh
# Choose option 1 (Next.js)
cd your-project
npm install openai @vercel/ai
# Start building your AI-powered web app!
```

### ML API Service
```bash
./new-project.sh  
# Choose option 2 (FastAPI)
cd your-project
pip install transformers torch
# Build your ML model API!
```

### Social Network App
```bash
./new-project.sh
# Choose option 3 (Neo4j)
cd your-project
docker-compose up -d
# Create your graph-based social app!
```

## 🎯 Perfect For

- **Hackathons & Buildathons** - Get started in minutes
- **Proof of Concepts** - Rapid prototyping
- **Learning Projects** - Modern best practices
- **Startup MVPs** - Production-ready patterns

## 🚢 Deployment Ready

**Next.js:** Deploy to Vercel, Netlify, or any static host  
**FastAPI:** Deploy to Railway, Heroku, or containerized platforms  
**Neo4j:** Use Neo4j AuraDB free tier for production

## 🤝 Contributing

Found a bug or want to add a template? Open an issue or PR!

## 📄 License

MIT License - Use freely in your projects!

---

**Built for builders, by builders.** 🏗️

**Happy hacking!** 🎉