from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import uvicorn

# Modern FastAPI with lifespan events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("🚀 FastAPI starting up...")
    yield
    # Shutdown  
    print("🛑 FastAPI shutting down...")

app = FastAPI(
    title="Hackathon AI API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hackathon AI API Ready! 🚀", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """File upload endpoint - extend for AI processing"""
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file provided")
    
    # Add your AI/ML processing here
    content = await file.read()
    
    return {
        "filename": file.filename,
        "size": len(content),
        "type": file.content_type,
        "message": "File processed successfully"
    }

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)