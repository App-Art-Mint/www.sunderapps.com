import { Component, OnInit } from '@angular/core'
import { SettingsService } from 'src/app/services/settings.service'

import { Settings, Theme } from 'src/app/objects/settings'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings:Settings
  themes:string[]
  constructor(private settingsService:SettingsService,
    private storageService:StorageService) {
    this.settingsService.settings.subscribe((settings) => {
      this.settings = settings
    })
    this.settingsService.update()
  }

  ngOnInit() {
    this.settingsService.getThemesSpaces()
  }

  update () {
    this.settingsService.update()
  }

  clear () {
    this.storageService.clear()
  }
}
