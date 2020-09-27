import { Component, OnInit, Inject, Optional } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Alert } from 'src/app/objects/alert'

@Component({
  selector: 'app-default-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.scss']
})
export class DefaultDialogComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<DefaultDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:Alert) { }

  ngOnInit() { }
}
