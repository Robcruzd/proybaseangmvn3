import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IJobHistory } from '../job-history.model';

@Component({
  standalone: true,
  selector: 'jhi-job-history-detail',
  templateUrl: './job-history-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class JobHistoryDetailComponent implements OnInit {
  jobHistory: IJobHistory | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ jobHistory }) => {
      this.jobHistory = jobHistory;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
