import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-tdr',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './TDR.component.html',
    styleUrls: ['./TDR.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TDRComponent { }
