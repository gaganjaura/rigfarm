import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:1337/';
    public ApiUrl = '';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}