import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

   EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  baseUrl:string="https://localhost:5001/api/v1/file"
  constructor(private httpclient:HttpClient) { }

  upload(file:File){

  const formdata:FormData= new FormData();
    const data: Blob = new Blob([file], { type: this.EXCEL_TYPE });
    // formdata.append(file, data,file.name)
    formdata.append(file.name,data)
    var res=this.httpclient.post(this.baseUrl,formdata);
    return res;
  }
}
