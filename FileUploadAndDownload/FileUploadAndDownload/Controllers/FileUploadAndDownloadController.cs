using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Bytescout.Spreadsheet;
using FileUploadAndDownload.Model;
using Ganss.Excel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using OfficeOpenXml.Drawing.Chart;
using OfficeOpenXml.Style;


namespace FileUploadAndDownload.Controllers
{
    [ApiController]
    [Route("api/v1/file")]
    public class FileUploadAndDownloadController : Controller
    {


        [HttpPost]
        public IActionResult Post( IFormFile file)
        {
            if (file == null || file.Length == Decimal.Zero) return NoContent();


            // if (!file.FileName.EndsWith(".xls") || !file.FileName.EndsWith(".xlsx")) return BadRequest();

                var dataList = new List<ExcelData>();

           using (ExcelPackage package= new ExcelPackage(file.OpenReadStream()))
           {

              
               ExcelWorksheet workSheet = package.Workbook.Worksheets["Sheet1"];
               int totalRows = workSheet.Dimension.Rows;
               int totalColumns = workSheet.Dimension.Columns;
               
               for (var i = 2; i <=totalRows ; i++)
               {
                   var excelData= new ExcelData();
                   for (var j = 1; j <=totalColumns; j++)
                   {
                       // /dataList.Add(workSheet.Cells[i, j].Value.ToString());

                       if (j == decimal.One) excelData.Id = workSheet.Cells[i, j].Value.ToString();
                       else excelData.Name = workSheet.Cells[i, j].Value.ToString();
                   }
                   dataList.Add(excelData);
               }
           }
           return Ok(dataList);

        }

        

        [HttpGet]
        public IActionResult Get()
        {

           
            string[] colNames = new string[10];
            colNames[0] = "Id";
            colNames[1] = "Name";
           
          
            byte[] result;

            
            using (var package = new ExcelPackage())
            {
               
                var worksheet = package.Workbook.Worksheets.Add("Sheet1");

                
                for (var i = 0; i < colNames.Length; i++)
                {
                    worksheet.Cells[1, i + 1].Style.Font.Size = 14; 
                    worksheet.Cells[1, i + 1].Value = colNames[i];  
                    worksheet.Cells[1, i + 1].Style.Font.Bold = true; 
                   
                    worksheet.Cells[1, i + 1].Style.Border.BorderAround(OfficeOpenXml.Style.ExcelBorderStyle.Thin);
                    
                    worksheet.Cells[1, i + 1].Style.Fill.PatternType = ExcelFillStyle.Solid;
                    worksheet.Cells[1, i + 1].Style.Fill.BackgroundColor.SetColor(Color.FromArgb(255, 243, 214));

                }
           
   
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

               
                result = package.GetAsByteArray();
            }

            
            return File(result, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "test.xlsx");



        }

    }
}