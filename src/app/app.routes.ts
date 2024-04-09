import { Routes } from '@angular/router'
import { EventExercisePage } from './exercises/components/habit/page/habit-exercise.page'
import { HelloWorldExercisePage } from './exercises/components/hello-world/page/hello-world.page'
import { FilesDistributionPage } from './exercises/components/files-distribution/page/files-distribution.page'
import { HabitsListPage } from './exercises/components/habits-list/page/habits-list.page'
import { IfExercisePage } from './exercises/components/if/page/if-exercise.page'
import { FormsPage } from './exercises/components/forms/page/forms.page'
import { CustomPropertiesPage } from './exercises/css/custom-properties/page/custom-properties.page'

export const routes: Routes = [
  {
    title: 'Hello World',
    path: 'hello-world',
    component: HelloWorldExercisePage,
  },
  {
    title: 'Files Distribution',
    path: 'files-distribution',
    component: FilesDistributionPage,
  },
  {
    title: 'Habit',
    path: 'habit-exercise',
    component: EventExercisePage,
  },
  {
    title: 'Habits List',
    path: 'habits-list',
    component: HabitsListPage,
  },
  {
    title: 'Conditional Rendering',
    path: 'conditional-rendering',
    component: IfExercisePage,
  },
  {
    title: 'Reactive Forms',
    path: 'reactive-forms',
    component: FormsPage,
  },
  {
    title: 'Custom Properties',
    path: 'custom-properties',
    component: CustomPropertiesPage,
  },
  {
    title: 'Hello World',
    path: '**',
    component: HelloWorldExercisePage,
  },
]
