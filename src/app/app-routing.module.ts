/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 17-11-27
 * Time: 下午2:43
 * Desc:
 */
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'modules', loadChildren: './modules/modules.module' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
