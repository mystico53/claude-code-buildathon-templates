#!/bin/bash
echo "🚀 Hackathon Project Creator (2025)"
echo "=================================="
echo ""
echo "1. 🌐 Web App (Next.js 15) - AI, APIs, real-time features"
echo "2. 🐍 AI/ML API (FastAPI) - Data processing, ML models"  
echo "3. 🕸️  Graph App (Neo4j) - Networks, relationships, recommendations"
echo ""
echo "💡 Most hackathon projects → Option 1"
echo ""

read -p "Choose template (1-3): " choice
read -p "Project name: " name

case $choice in
    1) 
        echo "📋 Creating Next.js 15 project with modern features..."
        cp -r ./nextjs-ultimate /workspace/$name
        cd /workspace/$name
        npm install
        npx prisma generate
        echo ""
        echo "✅ Next.js 15 project '$name' ready!"
        echo "🚀 Commands:"
        echo "   cd /workspace/$name"
        echo "   npm run dev"
        echo ""
        echo "📚 Add features:"
        echo "   npm install openai @vercel/ai    # AI features"
        echo "   npm install recharts             # Charts"
        echo "   npm install framer-motion        # Animations"
        ;;
    2) 
        echo "🐍 Creating FastAPI project with modern structure..."
        cp -r ./python-ai /workspace/$name
        echo ""
        echo "✅ FastAPI project '$name' ready!"
        echo "🚀 Commands:"
        echo "   cd /workspace/$name"
        echo "   pip install -r requirements.txt"
        echo "   uvicorn app.main:app --reload"
        echo ""
        echo "📚 Add ML libraries:"
        echo "   pip install openai pandas scikit-learn"
        ;;
    3)
        echo "🕸️ Creating Neo4j project with graph capabilities..."
        cp -r ./neo4j /workspace/$name
        cd /workspace/$name
        npm install
        echo ""
        echo "✅ Neo4j project '$name' ready!"
        echo "🚀 Commands:"
        echo "   cd /workspace/$name"
        echo "   docker-compose up -d    # Start Neo4j"
        echo "   npm run dev            # Start app"
        echo ""
        echo "🌐 Access:"
        echo "   App: http://localhost:3000"
        echo "   Neo4j: http://localhost:7474"
        ;;
esac

echo ""
echo "🎯 Templates are minimal by design - add what you need!"
echo "📖 Check README.md in your project for details"
echo "🏆 Happy hacking!"