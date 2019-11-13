using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularCoreGym.Interface;
using AngularCoreGym.Models;
using AngularCoreGym.ViewModels;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;

namespace AngularCoreGym.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttachmentController : Controller
    {
        private readonly IConfiguration _config;
        public AttachmentController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost, DisableRequestSizeLimit]
        public ActionResult UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];
                string webRootPath = _config.GetValue<string>("UploadDrive");
                string folderName = _config.GetValue<string>("UploadFolder");
                var folder3Name = string.Empty;
                foreach (var key in Request.Form.Keys)
                {
                    folder3Name = key;
                    break;
                }

                string newPath = Path.Combine(webRootPath, folderName, folder3Name);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return Json("Upload Successful.");
            }
            catch (System.Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
        }

        [HttpGet]
        public IActionResult Files([System.Web.Http.FromUri] string folder3Name)
        {
            string webRootPath = _config.GetValue<string>("UploadDrive");
            string folderName = _config.GetValue<string>("UploadFolder");

            var result = new List<string>();

            var uploads = Path.Combine(webRootPath, folderName, folder3Name);
            if (Directory.Exists(uploads))
            {
                foreach (string fileName in Directory.GetFiles(uploads))
                {
                    result.Add(fileName);
                }
            }
            return Ok(result);
        }

        [HttpDelete]
        [Route("delete")]
        public IActionResult Delete(string fileName)
        {
            if (System.IO.File.Exists(fileName))
            {
                // If file found, delete it    
                System.IO.File.Delete(Path.Combine(fileName));
            }
            return Ok();
        }
        
        [HttpGet]
        [Route("download")]
        public async Task<FileStream> DownloadFile(string fileName)
        {
            return new FileStream(fileName, FileMode.Open, FileAccess.Read);
        }
    }
}
