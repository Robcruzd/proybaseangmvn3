import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { TaskComponent } from './list/task.component';
import { TaskDetailComponent } from './detail/task-detail.component';
import { TaskUpdateComponent } from './update/task-update.component';
import { TaskRoutingResolveService } from './route/task-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const taskRoute: Routes = [
  {
    path: '',
    component: TaskComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TaskDetailComponent,
    resolve: {
      task: TaskRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TaskUpdateComponent,
    resolve: {
      task: TaskRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TaskUpdateComponent,
    resolve: {
      task: TaskRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default taskRoute;
