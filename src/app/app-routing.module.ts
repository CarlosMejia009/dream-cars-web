import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cars' },
    { path: 'cars', component: CarsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cars' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }