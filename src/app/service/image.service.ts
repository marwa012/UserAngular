import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {
  }


  getFiles(): Observable<any> {
    return this.http.get('http://localhost:9000/upload/getallfiles');
  }

  private upload(formData: FormData): Observable<HttpEvent<{}>> {
    const request = new HttpRequest('POST', 'http://localhost:9000/upload/post', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }

  uploadFolder(folder: FileList): Observable<HttpEvent<{}>> {
    const formData = new FormData();

    Array.from(folder).forEach(file => {
      formData.append('file', file);
    });

    return this.upload(formData);
  }

  getListOfUploadedFiles() {
    return this.http.get('http://localhost:9000/upload/getallfiles');
  }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('data', file);

    return this.upload(formData);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest(
      'POST', 'http://localhost:9000/upload/post',
      formdata,
      {
        reportProgress: true,
        responseType: 'text'
      }
    );

    return this.http.request(req);
  }


}
