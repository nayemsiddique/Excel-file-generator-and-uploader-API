using Microsoft.AspNetCore.Mvc;

namespace FileUploadAndDownload.Service
{
    public interface IFileOperationService
    {
        public IActionResult Upload();
        public IActionResult Download();
    }
}