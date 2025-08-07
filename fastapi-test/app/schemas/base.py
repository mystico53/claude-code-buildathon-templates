from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional

class BaseSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,  # New in Pydantic v2
        validate_assignment=True,
        arbitrary_types_allowed=True
    )

class FileUploadResponse(BaseSchema):
    filename: str
    size: int
    type: Optional[str] = None
    message: str
    processed_at: datetime = datetime.now()