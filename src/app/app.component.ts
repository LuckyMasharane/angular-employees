import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  employees =[{empName:"Lucky",empSurname:"Masharane",empPosition:"Developer",empAge:20,empImage:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"},
  {empName:"December",empSurname:"Makhanya",empPosition:"Mobile Developer",empAge:24,empImage:"https://images.pexels.com/photos/1706910/pexels-photo-1706910.jpeg?cs=srgb&dl=pexels-atef-khaled-1706910.jpg&fm=jpg"},
  {empName:"Lwandle",empSurname:"Masharane",empPosition:"Developer",empAge:29,empImage:"https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?cs=srgb&dl=pexels-graham-wizardo-1081188.jpg&fm=jpg"},
  {empName:"Evans",empSurname:"Masharane",empPosition:"Developer",empAge:30,empImage:"https://images.pexels.com/photos/3221010/pexels-photo-3221010.jpeg?cs=srgb&dl=pexels-reafon-gates-3221010.jpg&fm=jpg"},
  {empName:"Vusi",empSurname:"Masharane",empPosition:"Developer",empAge:19,empImage:"https://images.pexels.com/photos/1648413/pexels-photo-1648413.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1648413.jpg&fm=jpg"},
  {empName:"Goodman",empSurname:"Masharane",empPosition:"Developer",empAge:25,empImage:"https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1486064.jpg&fm=jpg"},
  {empName:"Fayve",empSurname:"Masharane",empPosition:"Developer",empAge:31,empImage:"https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?cs=srgb&dl=pexels-tim-savage-903661.jpg&fm=jpg"},
  {empName:"Wandile",empSurname:"Masharane",empPosition:"Developer",empAge:28,empImage:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"},
  {empName:"Thabo",empSurname:"Masharane",empPosition:"Senior Developer",empAge:27,empImage:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creation-hill-1681010.jpg&fm=jpg"}]
}
