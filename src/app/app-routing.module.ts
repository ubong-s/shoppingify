import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HistoryComponent } from './history/history.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent,
    title: 'Items - Shoppingify',
  },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'History - Shoppingify',
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    title: 'Statistics - Shoppingify',
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
