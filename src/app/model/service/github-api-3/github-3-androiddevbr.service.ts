import {Injectable} from '@angular/core';
import {Github3Service} from './github-3.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Github3AndroidDevBrService extends Github3Service {

  constructor(http: HttpClient) {
    super(http, 'androiddevbr/vagas');
  }
}
