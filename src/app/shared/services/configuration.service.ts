import { Injectable } from '@angular/core';
import { siteConfig } from '../../config/site.config';

@Injectable()
export class ConfigurationService {
  getSiteConfig() {
    return siteConfig;
  }
}
