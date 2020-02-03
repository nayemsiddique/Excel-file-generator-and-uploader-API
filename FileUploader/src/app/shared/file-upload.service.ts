import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

   EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  baseUrl:string="https://localhost:5001/api/v1/file"
  constructor(private httpclient:HttpClient) { }

  

  upload( file) {

    const formdata: FormData = new FormData();
    
    formdata.append("file", file, file.name)
    return this.httpclient.post(this.baseUrl, formdata);
  
  }


  download(){
    // return this.httpclient.get(this.baseUrl);


  }
}
