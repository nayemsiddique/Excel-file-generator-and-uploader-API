import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private fileUploadService:FileUploadService ,private httpclient:HttpClient) { }

  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  baseUrl: string = "https://localhost:5001/api/v1/file"
  ngOnInit() {
  }
  isUploaded=false;
  file:File=null;

  onUploadButtonAction(){
    
    this.fileUploadService.upload(this.file).subscribe(x=>{console.log(x)})
    // this.upload();
  }

  showFilePath(event:any){
    this.file=<File>event.target.files[0];


    
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/form-data'
  //   })
  // }

  // upload() {

  //   const formdata: FormData = new FormData();
  //   // const data: Blob = new Blob([file], { type: this.EXCEL_TYPE });
  //   // console.log(file)
  //   // console.log(file.name)
  //   formdata.append("file",this.file)
  //   var res = this.httpclient.post(this.baseUrl, formdata);
  //   // console.log(res)
  //   res.subscribe(x=>{
  //     console.log(x);
  //   })
  // }

  


  // onDownloadButtonAction(){
  //   // this.httpclient.post(this.baseUrl, { "colnames": ["id", "name"] }).subscribe(x => {
  //   //   console.log(x);
  //   // });
  //   //  this.httpclient.get(this.baseUrl).subscribe(x=>console.log(x));

  //    this.fileUploadService.download().subscribe(x=>console.log(x));
  // }





  // TRY

}
