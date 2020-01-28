import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private fileUpload:FileUploadService,private httpclient:HttpClient) { }

  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  baseUrl: string = "https://localhost:5001/api/v1/file"
  ngOnInit() {
  }
  isUploaded=false;
  file:File=null;

  onUploadButtonAction(){
    
    // this.isUploaded=true;
    //  this.fileUpload.upload(this.filePath).subscribe(x=>{
    //    console.log(x);
    //  });
    this.upload()
  }

  showFilePath(event:any){
    this.file=<File>event.target.files[0];
    // console.log(this.filePath.name)

    
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/form-data'
    })
  }

  upload() {

    const formdata: FormData = new FormData();
    // const data: Blob = new Blob([file], { type: this.EXCEL_TYPE });
    // console.log(file)
    // console.log(file.name)
    formdata.append("file",this.file,this.file.name)
    var res = this.httpclient.post(this.baseUrl, formdata);
    // console.log(res)
    res.subscribe(x=>{
      console.log(x);
    })
  }

  


  // onDownloadButtonAction(){
  //   this.download();
  // }
  // download(){
  //   // let col:String[]=["Id","Name","Phone"];
  //   this.httpclient.post(this.baseUrl+"/download",["id","name","student"]).subscribe(x=>{
  //     console.log(x);
  //   });
  // }

  


}
