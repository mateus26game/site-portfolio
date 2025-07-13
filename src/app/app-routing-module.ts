import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeTodosOsCursos } from './component/lista-de-todos-os-cursos/lista-de-todos-os-cursos';
import { Home } from './component/home/home';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'curso', component: ListaDeTodosOsCursos }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
